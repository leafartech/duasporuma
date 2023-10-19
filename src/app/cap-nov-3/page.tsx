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
                        {/* <p className="subtitle">Inscreva-se agora no Treinamento online e gratuito e aprenda como brasileiros que moram na Europa visitam suas famílias 2x por ano e não perdem nenhum evento em família através de passagens aéreas com 50% de desconto.</p> */}
                        <p className="subtitle">Inscreva-se agora no Treinamento online e gratuito e junte-se à Comunidade de Brasileiros na Europa que Aproveitará Férias, Natal ou Ano Novo no Brasil com Passagens 50% mais baratas! Não Fique de Fora!</p>
                        <div className={`_form_12 -mt-[50px] h-[200px] sm:-ms-6 w-full sm:max-w-sm`}></div>
                    </div>
                    <div className="mb-6 mt-2 sm:mt-0 sm:mb-0 sm:flex sm:justify-end">
                        <img src="./images/nov/bg.png" alt="Foto da Ani levando filho para conhecer os avós no Brasil" className="w-full sm:w-[456px] rounded-xl" />
                    </div>
                </div>
            </header>
        </div>
    )
}