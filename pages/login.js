import React from 'react';
import { useRouter } from 'next/router'; // Hook para fazer a mudança de páginas
import nookies from 'nookies'; // Nookies é uma biblioteca que gerencia cookies

export default function LoginScreen() {
    const router = useRouter();
    const [githubUser, setGithubUser] = React.useState('');

  return (
    <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <div className="loginScreen">
        <section className="logoArea">
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
        </section>

        <section className="formArea">
          <form className="box" onSubmit={(e)=>{
              e.preventDefault();

              // importando backend (postman) de login:
              fetch('https://alurakut.vercel.app/api/login', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      githubUser
                  })
              })
              .then(async (serverResponse) => {
                  const dataResponse = await serverResponse.json(); 
                  const TOKEN = dataResponse.token; // captura o token
                  nookies.set(null, 'USER_TOKEN', TOKEN, { // salva o token nos cookies
                    path: '/',
                    maxAge: 86400, // guarda o cookie por 1 dia
                  }); 
                  router.push('/'); // insere a página no histórico
              })
          }}>
            <p>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
          </p>
            <input placeholder="Usuário"
            value={
                githubUser //Conectando o useState aqui
            }
            onChange={(e) => {
                setGithubUser(e.target.value) // captura o que foi escrito
            }}/>
            {
                githubUser.length === 0 ? 'Preencha o campo' : '' // apenas o operador ternário pode ser usado dentro das {}
            }
            <button type="submit">
              Login
          </button>
          </form>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href="/login">
                <strong>
                  ENTRAR JÁ
              </strong>
              </a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
      </div>
    </main>
  )
} 