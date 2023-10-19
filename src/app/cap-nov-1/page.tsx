'use client'

import { TrophyIcon, StarIcon, UserGroupIcon, TicketIcon, CurrencyDollarIcon, BanknotesIcon } from '@heroicons/react/24/outline'
import Footer from '@/components/Footer';
import HeroFlex from '@/components/HeroFlex';
import Section from '@/components/Section';
import { useEffect, useState } from 'react'
import MyCard from '@/components/Card/New';
import Publico from '@/components/publico';
import Guia from '@/components/Guia';

export default function Page() {
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
        <div className="bg-zinc-100">
            <header className="w-full sm:min-h-screen flex justify-center items-center" id="forms">
                <div className="w-full max-w-7xl flex flex-col sm:grid sm:grid-cols-2 sm:items-center sm:gap-12 px-4 sm:px-0">
                    <div className="flex flex-col gap-4 pt-6 sm:pt-0">
                        <img src="./images/logo.webp" alt="Logo da Duas Por Uma" className="w-[82px] sm:w-[144px]" />
                        <h1 className="title">Aprenda o segredo para voar para o <span className="relative">Brasil economizando 50% nas passagens</span> e nunca mais se frustre com preços elevados.</h1>
                        <p className="subtitle">Inscreva-se agora no Treinamento online e gratuito e aprenda como brasileiros que moram na Europa visitam suas famílias 2x por ano e não perdem nenhum evento em família através de passagens aéreas com 50% de desconto.</p>
                        <div className={`_form_12 -mt-[50px] h-[200px] sm:-ms-6 w-full sm:max-w-sm`}></div>
                    </div>
                    <div className="mb-6 mt-2 sm:mt-0 sm:mb-0 sm:flex sm:justify-end">
                        <img src="./images/nov/bg.png" alt="Foto da Ani levando filho para conhecer os avós no Brasil" className="w-full sm:w-[456px]" />
                    </div>
                </div>
            </header>
            <main>
                <Section className="py-6" bg="bg-my">
                    <div className="flex flex-col items-center gap-4 max-w-md text-left sm:text-center">
                        <h2 className="text-xl sm:text-2xl text-white font-bold">Treinamento online e gratuito nos dias 6, 8 e 10 de novembro</h2>
                        <p className="text-zinc-300 font-medium">Sempre às 20h (horário da Alemanha) ou 16h do Brasil</p>
                    </div>
                </Section>
                <Section className="py-6 sm:py-12">
                    <div className="w-full flex flex-col gap-6 sm:gap-12">
                        <HeroFlex
                            imagePath="nov/feliz.png"
                            reverse={false}
                            title="Aprenda a emitir passagens aéreas com 50% de desconto"
                        >
                            <div className="text-zinc-600 font-medium text-sm sm:text-lg">
                                <p>Chegou a hora de você <strong>aprender emitir passagens</strong> com no <strong>mínimo 50% de desconto</strong> e nunca mais <span className="line-through">perder datas importantes no Brasil</span> com sua família por causa dos preços das passagens.</p>
                            </div>
                        </HeroFlex>
                        <HeroFlex
                            imagePath="nov/natal.png"
                            reverse={true}
                            title="Nunca mais se sinta frustrada com preços de passagens aéreas"
                        >
                            <div className="text-zinc-600 font-medium sm:text-lg">
                                <p>O treinamento Duas Por Uma é o movimento que tem levado <strong> milhares de brasileiros</strong> morando no exterior para <strong>passar datas importantes no Brasil</strong>.</p>
                                <p>Tudo isso por causa de <strong>estratégias que permitem</strong> os alunos <strong>emitirem passagens com descontos que passam dos 50%</strong>!</p>
                            </div>
                        </HeroFlex>
                    </div>
                </Section>
                <Section bg="bg-my">
                    <div className="text-left sm:text-center">
                        <h2 className="text-lg sm:text-xl text-white py-6"><strong>Não permita que os preços altos de passagens te impeçam de visitar a família no Brasil</strong></h2>
                    </div>
                </Section>
                <Section className="py-6 sm:py-12" bg="bg-my3">
                    <div className="w-full flex flex-col gap-12 sm:gap-16">
                        <div>
                            <h2 className="text-2xl sm:text-4xl text-my font-bold text-center">O que você vai aprender</h2>
                            <div className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-2 flex-wrap gap-3 sm:gap-6 mt-6 sm:mt-12">
                                <MyCard
                                    Icon={BanknotesIcon}
                                >
                                    Como <strong>transformar os gastos</strong> do seu dia em <strong>desconto nas passagens aéreas</strong> (aluguel, combustível, compras e muitos outros).
                                </MyCard>
                                <MyCard
                                    Icon={TicketIcon}
                                >
                                    Como identificar <strong>oportunidades</strong> únicas de compra de passagens com <strong>50% ou mais de desconto</strong>.
                                </MyCard>
                                <MyCard
                                    Icon={TrophyIcon}
                                >
                                    Como <strong>acessar salas vip</strong> em todos os aeroportos sem pagar nada a mais por isso.
                                </MyCard>
                                <MyCard
                                    Icon={CurrencyDollarIcon}
                                >
                                    O plano para você comprar sua primeira passagem <strong>pagando metade do preço</strong> ainda esse ano.
                                </MyCard>
                                <MyCard
                                    Icon={UserGroupIcon}
                                >
                                    Como aproveitar essas oportunidades para <strong> emitir passagens para toda sua família</strong>.
                                </MyCard>
                                <MyCard
                                    Icon={StarIcon}
                                >
                                    Como emitir <strong>passagens de executiva pelo preço da econômica</strong>.
                                </MyCard>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-4xl text-my font-bold text-center">Tudo isso em 3 aulas</h2>
                            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-12">
                                <img src="./images/card1.png" alt="" className="rounded-2xl" />
                                <img src="./images/card2.png" alt="" className="rounded-2xl" />
                                <img src="./images/card3.png" alt="" className="rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </Section>
                <Section className="pt-12">
                    <HeroFlex
                        imagePath="nov/classe.png"
                        reverse={false}
                        title="Para quem é o treinamento?"
                    >
                        <ul className="flex flex-col gap-6 sm:gap-4">
                            <li><Publico>Para quem se <strong>sente frustrado com preços altos</strong> das passagens.</Publico></li>
                            <li><Publico>Para <strong>brasileiros</strong> que moram no exterior e querem <strong>visitar o Brasil com mais frequência e/ou pagando menos</strong>.</Publico></li>
                            <li><Publico>Quer estar no <strong>Brasil no natal</strong>, <strong>ano novo</strong> ou <strong>fugir do inverno Europeu</strong>, mas o preço das passagens não deixa.</Publico></li>
                            <li><Publico>Mora <strong>fora e perde eventos e acontecimentos importantes</strong> com sua família e amigos por causa dos <strong>preços das passagens</strong>.</Publico></li>
                            <li><Publico>Ama viajar e <strong>quer pagar 50% mais barato</strong> nas tarifas aéreas.</Publico></li>
                            <li><Publico>Quer entender o <strong>mundo das milhas</strong> mas não sabe por onde começar.</Publico></li>
                            <li><Publico>Que deseja trazer sua família para uma <strong>viagem internacional</strong>.</Publico></li>
                            <li><Publico>Quer realizar o <strong>sonho de viajar de executiva</strong> e acha que isso é só para ricos.</Publico></li>
                        </ul>
                    </HeroFlex>
                </Section>
                <Section>
                    <Guia />
                </Section>
            </main>
            <Footer />
        </div>
    )
}
