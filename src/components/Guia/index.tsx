export default function Guia() {
    return (
        <div className="text-left sm:text-center py-12 sm:mb-8">
            <h2 className="text-my font-bold text-xl sm:text-[30px] mb-4 sm:mb-8">Quem vai te guiar nesse treinamento?</h2>
            <div className="shadow-2xl rounded-3xl sm:flex sm:flex-row-reverse max-w-5xl">
                <img src="./images/trip/25.png" alt="Treinadora Ani" className="rounded-t-3xl sm:rounded-none sm:rounded-e-3xl sm:w-[40%] object-cover" />
                <div className="py-8 sm:py-12 text-left px-8">
                    <h2 className="text-my font-extrabold text-3xl sm:text-4xl mb-6">Ani</h2>
                    <p className="font-medium mb-5 text-gray-600 text-sm sm:text-lg">Ani é especialista em planejamento de viagens, passagens, milhas, roteiros e tudo que envolve o mundo das viagens internacionais.</p>
                    <p className="font-medium mb-5 text-gray-600 text-sm sm:text-lg">Já ensinou mais de centenas de pessoas como comprar passagens com no mínimo 50% de desconto, planejarem o roteiro dos seus sonhos e nunca mais perderem um momento importante com sua família e amigos por causa do preço das passagens.</p>
                    <p className="font-medium text-gray-600 text-sm sm:text-lg">E agora, através do <strong>Duas Por Uma</strong>, vai te ensinar um caminho simples para <strong>você nunca mais comprar uma passagem com menos de 50%</strong> de desconto e ainda ter <strong>acesso a salas VIP</strong> dos aeroportos sem pagar nada mais por isso.</p>
                </div>
            </div>
        </div>
    )
}