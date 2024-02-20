import BotaoAlternarTema from "../components/template/BotaoAlternarTema";
import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function ajustes() {
  const {tema, alternarTema} = useAppData()

  return (
    <Layout
      title="Ajustes"
      subtitle="Configure o sistema por aqui!">
      <h3>Ajustes</h3>
      <button type="button" onClick={alternarTema}>click</button>
    </Layout>)
}