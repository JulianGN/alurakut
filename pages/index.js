import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSidebar(props){
  console.log(props)
  return (
    <Box>
      <img style={{borderRadius: '8px'}} src={`https://github.com/${props.githubUser}.png`} />
    </Box>
  )  
}

export default function Home() {

  const githubUser = 'juliangn';

  const pessoasFavoritas = [
  'rafaelcmpereira',
  'FelipeCardoso89',
  'brunomalvestuto',
  'robertokl',
  'omariosouto',
  'marcobrunodev']

  return (
    <> 
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{gridArea:'profileArea'}}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{gridArea:'welcomeArea'}}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet/>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea:'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da comunidade ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((pessoa) => {
                return (
                  <li>
                    <a href={`/users/${pessoa}`} key={githubUser}>
                      <img src={`https://github.com/${pessoa}.png`}/>
                      <span>{pessoa}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>     
          <Box>
            Comunidades
          </Box>     
        </div>  
      </MainGrid>
    </>
  )
}
