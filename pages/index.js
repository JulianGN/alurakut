import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSidebar({ githubUser }){
  return (
    // Podemos usar o as para transformar a div box em aside:
    <Box as="aside">
      <img style={{borderRadius: '8px'}} src={`https://github.com/${githubUser}.png`} />
      <hr/>
      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>
          @{githubUser}
        </a>
      </p>

      <hr/>

      <AlurakutProfileSidebarMenuDefault/> 

    </Box>
  )  
}

export default function Home() {
  
  const githubUser = 'juliangn';
  const [comunidades, setComunidades] = React.useState([{
    id: '123456', // sera substituído na inserção
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]); //destructuring
  const pessoasFavoritas = [
  'rafaelcmpereira',
  'FelipeCardoso89',
  'brunomalvestuto',
  'robertokl',
  'omariosouto',
  'marcobrunodev']

  return (
    <> 
      <AlurakutMenu  githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{gridArea:'profileArea'}}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{gridArea:'welcomeArea'}}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet/>
          </Box>

          <Box>
            <h2 className="subtitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateCom(e){
              e.preventDefault();
              const dadosDoForm = new FormData(e.target); //captura em um objeto o que foi inserido no formulário

              const comunidade = {
                id: new Date().toISOString(), //algo que seja único, para diferenciar cada item
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);
            }}>
              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?"
                name="title"
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text" />
              </div>
              <div>
                <input placeholder="Coloque uma URL para usarmos de capa"
                name="image"
                aria-label="Coloque uma URL para usarmos de capa" />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea:'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.map((com) => {
                return (
                  <li key={com.id}>
                    <a href={`/users/${com.title}`} key={com.title}>
                      <img src={com.image}/>
                      <span>{com.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>     
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da comunidade ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((pessoa) => {
                return (
                  <li key={pessoa}>
                    <a href={`/users/${pessoa}`}>
                      <img src={`https://github.com/${pessoa}.png`}/>
                      <span>{pessoa}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>        
        </div>  
      </MainGrid>
    </>
  )
}
