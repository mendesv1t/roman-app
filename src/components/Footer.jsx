import React from 'react';
import githubAzul from '../assets/icone-github-bleu.png'
import githubRoxo from '../assets/icone-github-violet.png'
 
const Footer = () => {
  return (
      <footer style={{height: "8%"}}>
        <div style={{display: "flex",justifyContent:"space-around",alignItems: "center", height: "100%",width: "100%", backgroundColor: "rgb(246, 241, 233)"}}>
          <a href="https://github.com/luizferreira7">
              <img
                  src={githubAzul}
                  style={{ height: "48px"}}
                  alt="logo"
                  title='Luiz Carlos Ferreira'
              />
          </a>
          <h6 className="block tracking-wide text-gray-500 text-sm font-bold mb-2" style={{fontFamily: "medievalSharp", fontWeight: "400", fontSize: "15pt", color: "black"}}>Autores</h6>
          <a href="https://github.com/mendesv1t/">
              <img
                  src={githubRoxo}
                  style={{ height: "48px" }}
                  alt="logo"
                  title='Vitoria Chaves'
              />
          </a>
          </div>
      </footer>
  );
};


export default Footer;