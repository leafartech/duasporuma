'use client'

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Guia from "@/components/Guia";
import Section from "@/components/Section";
import { useEffect } from "react";

export default function Home() {
  let cont = 0
  useEffect(() => {
    if (cont === 0) {
      const script = document.createElement('script');
      script.src = 'https://duasporuma.activehosted.com/f/embed.php?id=12';
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;

      document.body.appendChild(script);
      cont++;
    }
  }, []);

  return (
    <div>
      <header className="min-h-screen pb-20 sm:pb-0 sm:min-h-full cap-set">
        <div className="flex items-center justify-center w-full sm:h-full sm:items-start">
          <div className="flex flex-col justify-center sm:flex sm:flex-row-reverse max-w-7xl">
            <div className="flex justify-center sm:justify-start sm:items-start col-span-2">
              <img src="./images/ft1.png" alt="" className="w-64 sm:w-[600px]" />
            </div>
            <div className="flex flex-col items-center sm:items-start sm:justify-center sm:max-w-2xl gap-2 text-center sm:text-left -mt-16 md:ps-4 xl:ps-0 px-2">
              <img src="./images/logo.png" alt="" className="hidden sm:block w-64" />
              <img src="./images/logo2.png" alt="" className="block sm:hidden w-48" />
              {/* Aprenda o método dos Brasileiros na Europa para Economizar 50% nas passagens aéreas para o Brasil. */}
              <h1 className="text-title font-bold text-[28px] sm:text-4xl  sm:max-w-md">Aprenda o método dos Brasileiros na Europa para <span className="und-effect">Economizar 50% nas passagens aéreas</span> para o Brasil.</h1>
              <p className="text-subtitle font-medium sm:max-w-lg sm:text-lg my-2">Inscreva-se agora no Treinamento online e gratuito e junte-se à Comunidade de Brasileiros na Europa que Aproveitará Férias, Natal ou Ano Novo no Brasil com Passagens 50% mais baratas! Não Fique de Fora!</p>
              <div className={`_form_12 -mt-[50px] sm:-ms-6 w-full sm:max-w-sm`}></div>
            </div>
          </div>
        </div>
      </header>
      <main className="">
        <section className="bg-title py-10 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3 text-center max-w-xl px-4">
            <h2 className="text-white font-bold text-lg sm:text-3xl">TREINAMENTO ONLINE E GRATUITO DIA 18, 20 E 22 DE SETEMBRO</h2>
            <p className="text-gray-100 sm:text-xl">Sempre às 20h (horário da Alemanha) ou 15h do Brasil</p>
          </div>
        </section>
        <Section>
          <div className="flex flex-col sm:grid sm:grid-cols-2 pb-12 sm:py-12 sm:max-w-5xl">
            <div className="mt-12 sm:text-lg text-gray-600 max-w-lg">
              <p className="mb-4">Aumentos de preços por todos os lados. Isso não é diferente no mundo das passagens aéreas. O preço alto das passagens impossibilitam nossas famílias de se relacionar com os avós, familiares e amigos, assim como de passarmos datas importantes no Brasil, nos fazendo perder o recurso mais importante que temos: o tempo.</p>
              <p className="mb-4">Chegou a hora de você <span className="text-subtitle"><strong>aprender emitir passagens com 50% de desconto e nunca mais perder uma data importante</strong></span> no Brasil por causa dos preços das passagens.</p>
              <p className="mb-4">O treinamento Duas Por Uma é o movimento que levará o maior número de brasileiros morando no exterior para passar datas importantes no Brasil em 2023. <strong>Vai deixar sua família de fora?</strong></p>
            </div>
            <div className="flex items-center justify-center mt-4 sm:mt-0">
              <img src="./images/ticket.png" alt="" className="w-72 sm:w-[420px]" />
            </div>
          </div>
        </Section>
        <section className="bg-bg pt-14 flex flex-col justify-center items-center text-center pb-12">
          <div className="max-w-7xl flex flex-col items-center">
            <h2 className="text-title font-bold text-[28px] sm:text-5xl">Você vai aprender</h2>
            <div className="flex flex-wrap gap-3 justify-center px-4 my-6">
              <Card
                imagePath="1"
                text="Como transformar os gastos do seu dia em desconto nas passagens aéreas (aluguel, combustível, compras e etc)."
              />
              <Card
                imagePath="2"
                text="Como identificar oportunidades únicas de compra de passagens com 50% ou mais de desconto."
              />
              <Card
                imagePath="3"
                text="Como acessar salas vip em todos os aeroportos sem pagar nada a mais por isso."
              />
              <Card
                imagePath="4"
                text="O plano pra você comprar sua primeira passagem pagando metade do preço ainda esse ano."
              />
              <Card
                imagePath="5"
                text="Como aproveitar essas oportunidades para emitir passagens para toda sua família."
              />
              <Card
                imagePath="6"
                text="Como emitir passagens de executiva pelo preço da econômica."
              />
            </div>
            <h2 className="text-title font-bold text-3xl mt-8">Tudo isso em 3 aulas <br className="sm:hidden" />100% gratuitas</h2>
            <div className="flex flex-wrap justify-center gap-3 px-4 my-6">
              <img src="./images/card1.png" alt="" className="rounded-xl w-full xl:max-w-sm sm:max-w-xs" />
              <img src="./images/card2.png" alt="" className="rounded-xl w-full xl:max-w-sm sm:max-w-xs" />
              <img src="./images/card3.png" alt="" className="rounded-xl w-full xl:max-w-sm sm:max-w-xs" />
            </div>
            <div className="sm:max-w-md w-full px-4 mt-4">
              <a href="#inicio" type="submit" className="text-white bg-title font-extrabold py-3 text-center w-[320px] sm:w-full rounded-full uppercase text-base">Quero participar</a>
            </div>
          </div>
        </section>
        <Section>
          <div className="text-center sm:text-left mt-12 sm:grid sm:grid-cols-2 max-w-7xl">
            <div className="sm:px-16 relative   ">
              <div className="sticky top-0 sm:pb-12">
                <h2 className="text-title font-bold text-2xl sm:text-4xl pe-4">Para quem é o treinamento?</h2>
                <ul className="flex flex-col gap-4 mt-4">
                  <li className="grid grid-cols-7 text-left items-center sm:flex sm:gap-8">
                    <img src="./images/plane.png" alt="" className="w-8" />
                    <span className="text-subtitle col-span-6 sm:col-span-5 font-medium text-sm sm:text-lg">Para brasileiros que moram no exterior e querem visitar o Brasil com mais frequência e/ou pagando menos</span>
                  </li>
                  <li className="grid grid-cols-7 text-left items-center sm:flex sm:gap-8">
                    <img src="./images/plane.png" alt="" className="w-8" />
                    <span className="text-subtitle col-span-6 sm:col-span-5 font-medium text-sm sm:text-lg">
                      Mora fora e perde eventos e acontecimentos importantes com sua família e amigos por causa dos preços das passagens
                    </span>
                  </li>
                  <li className="grid grid-cols-7 text-left items-center sm:flex sm:gap-8">
                    <img src="./images/plane.png" alt="" className="w-8" />
                    <span className="text-subtitle col-span-6 sm:col-span-5 font-medium text-sm sm:text-lg">
                      Quer estar no Brasil no natal, ano novo ou fugir do inverno Europeu, mas o preço das passagens não deixa
                    </span>
                  </li>
                  <li className="grid grid-cols-7 text-left items-center sm:flex sm:gap-8">
                    <img src="./images/plane.png" alt="" className="w-8" />
                    <span className="text-subtitle col-span-6 sm:col-span-5 font-medium text-sm sm:text-lg">
                      Quer entender o mundo das milhas mas não sabe por onde começar
                    </span>
                  </li>
                  <li className="grid grid-cols-7 text-left items-center sm:flex sm:gap-8">
                    <img src="./images/plane.png" alt="" className="w-8" />
                    <span className="text-subtitle col-span-6 sm:col-span-5 font-medium text-sm sm:text-lg">
                      Ama viajar e quer pagar 50% mais barato nas tarifas aéreas
                    </span>
                  </li>
                  <li className="grid grid-cols-7 text-left items-center sm:flex sm:gap-8">
                    <img src="./images/plane.png" alt="" className="w-8" />
                    <span className="text-subtitle col-span-6 sm:col-span-5 font-medium text-sm sm:text-lg">
                      Quer realizar o sonho de viajar de executiva e acha que isso é só para ricos
                    </span>
                  </li>
                </ul>
                <p className="text-title text-sm font-medium mt-4 sm:text-lg mb-8 sm:mb-0">Dá uma olhada nas experiências que eu já viví, graças a esses conhecimentos que eu vou te ensinar…</p>
              </div>
            </div>
            <div className="pb-12">
              <div className="grid grid-cols-3 sm:grid-cols-5 grid-rows-[9] gap-3 sm:hidden">
                <img src="./images/trip/1.png" alt="" className="rounded w-full h-full sm:h-full object-cover" />
                <img src="./images/trip/2.png" alt="" className="rounded w-full h-full sm:h-full object-cover" />
                <img src="./images/trip/3.png" alt="" className="rounded w-full h-full sm:h-full object-cover" />
                <img src="./images/trip/4.png" alt="" className="rounded w-full h-full sm:h-full object-cover" />
                <img src="./images/trip/5.png" alt="" className="rounded w-full h-full sm:h-full object-cover" />
                <img src="./images/trip/6.png" alt="" className="rounded w-full h-full sm:h-full object-cover" />
                <div className="col-span-3 grid gap-3 grid-cols-2 sm:grid-cols">
                  <img src="./images/trip/7.png" alt="" className="rounded w-full h-full sm:h-24 object-cover" />
                  <img src="./images/trip/8.png" alt="" className="rounded w-full h-full sm:h-24 object-cover" />
                </div>
                <div className="col-span-3 grid gap-3 grid-cols-2">
                  <img src="./images/trip/9.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                  <img src="./images/trip/10.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-3">
                  <img src="./images/trip/11.png" alt="" className="col-span-2 rounded w-full h-full sm:h-24 object-cover" />
                  <img src="./images/trip/12.png" alt="" className="rounded w-full h-full sm:h-24 object-cover" />
                </div>
                <div className="col-span-3 grid gap-3 grid-cols-2">
                  <img src="./images/trip/13.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                  <img src="./images/trip/14.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                </div>
                <div className="col-span-3 grid gap-3 grid-cols-4">
                  <img src="./images/trip/15.png" alt="" className="rounded w-full h-full sm:h-24 object-cover" />
                  <img src="./images/trip/16.png" alt="" className="rounded w-full h-full sm:h-24 object-cover" />
                  <img src="./images/trip/15.2.png" alt="" className="col-span-2 rounded w-full h-full sm:h-24 object-cover" />
                </div>
                <div className="col-span-3 grid gap-3 grid-cols-2">
                  <img src="./images/trip/15.3.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                  <img src="./images/trip/15.1.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                </div>
                <img src="./images/trip/17.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                <img src="./images/trip/18.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                <img src="./images/trip/19.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                <div className="col-span-3">
                  <img src="./images/trip/20.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                </div>
                <div className="col-span-3">
                  <img src="./images/trip/21.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                </div>
                <div className="col-span-3">
                  <img src="./images/trip/22.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                </div>
                <div className="col-span-3 grid gap-3 grid-cols-2">
                  <img src="./images/trip/23.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                  <img src="./images/trip/24.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                </div>
                <div className="col-span-3 grid gap-3 grid-cols-2">
                  <img src="./images/trip/25.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                  <img src="./images/trip/26.png" alt="" className="rounded w-full h-full max-h-48 sm:h-24 object-cover" />
                </div>
              </div>
              <div className="hidden sm:grid sm:grid-cols-4 items-center wrap gap-4">
                <img src="./images/trip/1.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/2.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/3.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/4.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/5.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/6.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/7.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/8.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/9.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/10.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/11.png" alt="" className="col-span-2 rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/12.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/13.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/14.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/15.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/16.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/15.2.png" alt="" className="col-span-2 rounded w-full h-full sm:h-full sm:max-w-full object-cover" />
                <img src="./images/trip/15.3.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/15.1.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/17.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/18.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/19.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/20.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/21.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/22.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/23.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/24.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/25.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
                <img src="./images/trip/26.png" alt="" className="rounded w-full h-full sm:h-full sm:max-w-full max-h-48 object-cover" />
              </div>
            </div>
          </div>
        </Section>
        <Section bg="bg-gray-100">
          <Guia />
        </Section>
      </main>
      <Footer />
    </div>
  )
}
