async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = conexao.json();
  return conexaoConvertida;
}

async function criaVideo() {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    }
  });
  const conexaoConvertida = conexao.json();
  return conexaoConvertida;
}

export const conectaApi = {
  listaVideos
} 