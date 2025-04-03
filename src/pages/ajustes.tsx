import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";
import BotaoAlternarTema from "../components/template/BotaoAlternarTema";

export default function ajustes() {
  const { tema, alternarTema } = useAppData();

  return (
    <Layout title="Ajustes" subtitle="Configure o sistema por aqui!">
      <div className="flex flex-col gap-6">
        <h3 className="text-lg font-semibold">Personalização</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm">Alternar Tema:</span>
          <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
        </div>
      </div>
    </Layout>
  );
}
