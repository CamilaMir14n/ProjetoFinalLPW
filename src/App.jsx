import './App.css';
const perfil = {
  nome: 'Lucas Silva',
  idade: 6,
  avatar: 'https://i.pinimg.com/736x/13/e7/9d/13e79dfaa493be4b88f62d057073d86b.jpg'
};

const historico = [
  { atividade: 'Cores e Formas', data: '20/06/2025' },
  { atividade: 'Jogo da Memória', data: '18/06/2025' },
  { atividade: 'Complete a Palavra', data: '15/06/2025' }
];

const atividades = [
  {
    title: 'Cores e Formas',
    description: 'Ajude a criança a identificar cores e formas.',
    image: 'https://i.pinimg.com/736x/6f/27/fd/6f27fdc55d8157d5d5a326ba6e63c27a.jpg'
  },
  {
    title: 'Jogo da Memória',
    description: 'Desenvolva a memória com figuras divertidas.',
    image: 'https://i.pinimg.com/736x/32/0c/64/320c64ed31ae33bad13eded5dc804531.jpg'
  },
  {
    title: 'Complete a Palavra',
    description: 'Atividade de reforço da alfabetização.',
    image: 'https://i.pinimg.com/736x/a7/d7/d5/a7d7d54a4d4393f0505b4c3ebf5aba91.jpg'
  }
];

const livros = [
  {
    titulo: 'Como Você Se Sente?',
    descricao: 'Um livro interativo para explorar emoções.',
    imagem: 'https://i.pinimg.com/736x/73/ad/d9/73add98f0bff4c06e857fbe43a7c3e36.jpg',
    link: 'https://leiturinha.com.br/blog/livros-sobre-sentimentos-infantis/'
  },
  {
    titulo: 'O Monstro das Cores',
    descricao: 'Ajuda as crianças a identificar e nomear emoções.',
    imagem: 'https://i.pinimg.com/736x/f7/83/e4/f783e421fa46a57dfd7d45125d2d9393.jpg',
    link: 'https://leiturinha.com.br/blog/livros-sobre-sentimentos-infantis/'
  },
  {
    titulo: 'A Raiva Não É Um Bicho-Papão',
    descricao: 'Ensina que sentir raiva é normal e como lidar com isso.',
    imagem: 'https://i.pinimg.com/originals/54/98/c6/5498c63f5606637bbea83cde30acac6c.png',
    link: 'https://leiturinha.com.br/blog/livros-sobre-sentimentos-infantis/'
  }
];

export default function App() {
  return (
    <div
      className="app"
      style={{
        minHeight: "100vh",
        fontFamily: "Comic Sans MS, Comic Sans, cursive, Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
        background: "#fdf6e3"
      }}
    >
      {/* Fundo psicodélico SVG */}
      <svg
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none"
        }}
        viewBox="0 0 400 800"
        preserveAspectRatio="none"
      >
        <path d="M0,0 Q200,100 400,0 L400,800 Q200,700 0,800 Z" fill="#6ee7b7" opacity="0.4" />
        <path d="M0,100 Q200,200 400,100 L400,700 Q200,600 0,700 Z" fill="#f472b6" opacity="0.3" />
        <path d="M0,200 Q200,300 400,200 L400,600 Q200,500 0,600 Z" fill="#60a5fa" opacity="0.3" />
        <path d="M0,300 Q200,400 400,300 L400,500 Q200,400 0,500 Z" fill="#fbbf24" opacity="0.2" />
      </svg>

      <div style={{ position: "relative", zIndex: 1, padding: "16px 0" }}>
        <h1 style={{
          textAlign: "center",
          color: "#fff",
          background: "linear-gradient(90deg,#f472b6,#60a5fa,#fbbf24,#6ee7b7)",
          borderRadius: 24,
          margin: "16px auto 12px auto",
          width: "90%",
          fontWeight: "bold",
          fontSize: 28,
          letterSpacing: 1
        }}>
          Protótipo Educacional
        </h1>

        {/* Perfil da Criança */}
        <section style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 12px #e0e0e0",
          padding: 20,
          margin: "0 auto 24px auto",
          maxWidth: 340,
          border: "3px solid #f472b6"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img src={perfil.avatar} alt="Avatar da criança"
              style={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                border: "3px solid #60a5fa",
                background: "#eaf6fb"
              }}
            />
            <div>
              <div style={{ fontWeight: "bold", fontSize: 18, color: "#f472b6" }}>{perfil.nome}</div>
              <div style={{ fontSize: 15, color: "#60a5fa" }}>{perfil.idade} anos</div>
            </div>
          </div>
          <div style={{ marginTop: 14, display: "flex", gap: 8 }}>
            <button style={{
              background: "#6ee7b7",
              color: "#222",
              border: "none",
              borderRadius: 8,
              padding: "6px 12px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: 14
            }}>Ver outras crianças</button>
            <button style={{
              background: "#fbbf24",
              color: "#222",
              border: "none",
              borderRadius: 8,
              padding: "6px 12px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: 14
            }}>Atualizar informações</button>
          </div>
          <div style={{ marginTop: 18 }}>
            <div style={{ color: "#3a7ca5", fontWeight: "bold", fontSize: 15, marginBottom: 4 }}>Histórico:</div>
            <ul style={{ paddingLeft: 16, margin: 0 }}>
              {historico.map((item, i) => (
                <li key={i} style={{
                  background: "#f472b6",
                  color: "#fff",
                  borderRadius: 8,
                  marginBottom: 6,
                  padding: "4px 8px",
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 8
                }}>
                  <span style={{
                    display: "inline-block",
                    width: 18,
                    height: 18,
                    background: "#fff",
                    borderRadius: "50%",
                    marginRight: 6
                  }}></span>
                  <span>{item.atividade}</span>
                  <span style={{ marginLeft: "auto", fontSize: 12, color: "#ffe4fa" }}>{item.data}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Atividades Recomendadas */}
        <section style={{
          background: "#f472b6",
          borderRadius: 18,
          boxShadow: "0 2px 12px #e0e0e0",
          padding: 20,
          margin: "0 auto 24px auto",
          maxWidth: 370,
          color: "#fff"
        }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
            <span style={{
              background: "#fff",
              color: "#f472b6",
              borderRadius: "50%",
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginRight: 10
            }}>🎲</span>
            <h2 style={{ fontSize: 20, margin: 0 }}>Atividades</h2>
          </div>
          {/* Campo de busca fake */}
          <div style={{
            background: "#fff",
            borderRadius: 8,
            padding: "6px 10px",
            marginBottom: 16,
            display: "flex",
            alignItems: "center"
          }}>
            <input
              type="text"
              placeholder="Pesquisar atividades..."
              style={{
                border: "none",
                outline: "none",
                fontSize: 15,
                flex: 1,
                background: "transparent"
              }}
              disabled
            />
            <span style={{ color: "#f472b6", fontSize: 18, marginLeft: 6 }}>🔍</span>
          </div>
          <div>
            {atividades.map((a, i) => (
              <div key={i} style={{
                background: "#fff",
                color: "#f472b6",
                borderRadius: 12,
                boxShadow: "0 1px 4px #fbbf24",
                padding: 12,
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 12
              }}>
                <div style={{
                  width: 38,
                  height: 38,
                  background: "#eaf6fb",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img src={a.image} alt={a.title} style={{ width: 28, height: 28, objectFit: "contain" }} />
                </div>
                <div>
                  <div style={{ fontWeight: "bold", fontSize: 15 }}>{a.title}</div>
                  <div style={{ fontSize: 13 }}>{a.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tutorial Atividade */}
        <section style={{
          background: "#60a5fa",
          borderRadius: 18,
          boxShadow: "0 2px 12px #e0e0e0",
          padding: 20,
          margin: "0 auto 24px auto",
          maxWidth: 370,
          color: "#fff"
        }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
            <span style={{
              background: "#fff",
              color: "#60a5fa",
              borderRadius: "50%",
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginRight: 10
            }}>🎥</span>
            <h2 style={{ fontSize: 20, margin: 0 }}>Tutorial Atividade</h2>
          </div>
          <div>
            {livros.map((livro, i) => (
              <div key={i} style={{
                background: "#fff",
                color: "#60a5fa",
                borderRadius: 12,
                boxShadow: "0 1px 4px #6ee7b7",
                padding: 12,
                marginBottom: 12,
                textAlign: "center"
              }}>
                <img src={livro.imagem} alt={livro.titulo} style={{ width: 48, height: 48, objectFit: "contain", marginBottom: 6 }} />
                <div style={{ fontWeight: "bold", fontSize: 15 }}>Tutorial</div>
                <div style={{ fontSize: 13, marginBottom: 6 }}>{livro.descricao}</div>
                <a href={livro.link} target="_blank" rel="noopener noreferrer"
                  style={{
                    background: "#6ee7b7",
                    color: "#222",
                    borderRadius: 8,
                    padding: "4px 10px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: 14,
                    display: "inline-block"
                  }}>Saiba mais</a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
