import { useEffect, useState } from 'react';

function App() {
  // Estado para guardar os dados que vêm do Django
  const [dados, setDados] = useState(null);

  useEffect(() => {
    // Faz a requisição para o endpoint do Django
    fetch('http://localhost:8000/api/')
      .then(response => response.json())
      .then(data => setDados(data))
      .catch(error => console.error("Erro ao buscar dados:", error));
  }, []);

  if (!dados) return <p>Carregando dados do servidor...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="font-bold text-center text-fuchsia-500 text-6xl">Bem-vindo, {dados.usuario}!</h1>
      <p className="text-xl text-blue-500 ">Status: {dados.status}</p>
      <p className="text-xl text-green-500">Você tem {dados.notificacoes} novas notificações.</p>
      
      <h3 className="text-xl font-bold mt-6 text-gray-500">Seus Itens:</h3>
      <ul className="list-disc list-inside">
        {dados.itens.map((item, index) => (
          <li className="text-lg text-cyan-700 " key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
