import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import loadingSvg from '../../../public/images/loading.svg'
import useAuth from '../../../src/data/hook/useAuth'
import route from 'next/router'

export default function ForceAuth(props: any) {
     const { user, loading } = useAuth()

     function renderizarConteudo() {
          return (
               <>
                    <Head>
                         <Script
                              dangerouslySetInnerHTML={{
                                   __html: `
                                        if(!document.cookie?.includes("admin-template-projeto-auth")){
                                             window.location.href = "/autenticacao"
                                        }
                                   `
                              }}
                         />
                    </Head>
                    {props.children}
               </>
          )
     }

     function renderizarCarregando() {
          return (
               <div className="
                    flex justify-center items-center h-screen
               ">
                    <Image
                         src={loadingSvg}
                         alt='Loading'
                    />
               </div>
          )
     }

     return renderizarConteudo()
     // O codigo abaixo serve para forçar a atuenticação
     // if (!loading && user?.email) {
     //      return renderizarConteudo()
     // } else if(loading) {
     //      return renderizarCarregando()
     // } else {
     //      route.push('/autenticacao')
     //      return null
     // }
}