import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function agenda() {
  const context = useAppData()
  return (
    <Layout title="Agenda"
      subtitle="Aqui você irá gerenciar as sua agenda">
      <h3>{context.nome}</h3>
    </Layout>)
}