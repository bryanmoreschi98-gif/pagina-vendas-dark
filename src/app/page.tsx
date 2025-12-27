"use client";

import { CheckCircle, Zap, Users, Clock, Shield, Star, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      icon: CheckCircle,
      title: "Acompanhamento de Tarefas Concluídas",
      description: "Monitore suas conquistas diárias e receba recompensas por cada tarefa concluída, tornando seu progresso significativo."
    },
    {
      icon: Zap,
      title: "Planejador Anti-Sobrecarga",
      description: "Anote suas metas e deixe a IA sugerir microtarefas para que você possa alcançá-las sem se sentir sobrecarregado."
    },
    {
      icon: Users,
      title: "Rede e Interação para Motivação",
      description: "Conecte-se com outras pessoas, compartilhe sua evolução, troque ideias e dicas, e encontre um apoio valioso."
    },
    {
      icon: Star,
      title: "Gerenciador de Dopamina",
      description: "Transforme sua lista de tarefas em um jogo com etapas pequenas, recompensas visuais e entretenimento."
    },
    {
      icon: Clock,
      title: "Acompanhamento Detalhado",
      description: "Informe quanto tempo você deseja levar para alcançar suas metas e receba lembretes diários personalizados."
    },
    {
      icon: Shield,
      title: "Proteção Contra Distrações",
      description: "Estratégias simples e eficazes para ajudá-lo a manter o foco, como contagens regressivas e dicas de respiração."
    }
  ];

  const testimonials = [
    {
      text: "O FocusAI mudou minha rotina! Agora, posso visualizar meu progresso e me sinto motivado a continuar.",
      author: "Maria S.",
      role: "Usuária Satisfeita"
    },
    {
      text: "Finalmente encontrei uma ferramenta que entende as minhas necessidades e me ajuda a ser mais produtivo!",
      author: "Lucas M.",
      role: "Profissional Livre"
    }
  ];

  const faqs = [
    {
      question: "Posso usar o FocusAI sem experiência técnica?",
      answer: "Certamente! O app é intuitivo e feito para todos."
    },
    {
      question: "O app funciona offline?",
      answer: "Muitas funcionalidades estarão disponíveis offline, mas a internet aumenta sua experiência."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>FAÇA MAIS EM MENOS TEMPO</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Transforme Sua Rotina: Aumente Sua{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Produtividade
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
              Com o FocusAI, você conseguirá realizar suas tarefas diárias com facilidade, ganhando recompensas e apoio de uma comunidade motivadora!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-105 w-full sm:w-auto"
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-xl w-full sm:w-auto"
              >
                Saiba Mais
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Text */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent to-blue-950/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Se você luta contra a distração e a sobrecarga de tarefas, não está sozinho. Apresentamos o <span className="text-blue-400 font-semibold">FocusAI</span>, um aplicativo inovador criado especialmente para ajudar pessoas com TDAH a alcançar suas metas de forma divertida e eficaz. A jornada para uma vida mais produtiva começa aqui!
            </p>
          </div>
        </div>
      </section>

      {/* Connection Questions */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 sm:gap-8">
              {[
                "Já se sentiu sobrecarregado ao olhar para sua lista de tarefas?",
                "A motivação parece desaparecer no meio do dia?",
                "E se você pudesse dividir suas metas em pequenas etapas e ainda ser recompensado por cada conquista?"
              ].map((question, index) => (
                <Card key={index} className="bg-[#111111] border-blue-500/20 p-6 sm:p-8 hover:border-blue-500/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 font-bold">{index + 1}</span>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-300">{question}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-950/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              A Solução que Você{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Esperava
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              O FocusAI oferece ferramentas práticas e inovadoras para transformar sua maneira de trabalhar. Este app utiliza a inteligência artificial e uma abordagem interativa para ajudar você a se manter focado, motivado e, acima de tudo, produtivo!
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              O Que Você Vai{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Receber
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-[#111111] border-blue-500/20 p-6 sm:p-8 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-600/10 transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent to-blue-950/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid gap-6 sm:gap-8">
            <Card className="bg-[#111111] border-blue-500/20 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Questionário Inicial Personalizado</h3>
                  <p className="text-gray-400">Nos ajude a entender seus desafios e o que mais motiva você, para que possamos fornecer uma experiência verdadeiramente personalizada.</p>
                </div>
              </div>
            </Card>

            <Card className="bg-[#111111] border-blue-500/20 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Botão "Iniciar" para Cada Tarefa</h3>
                  <p className="text-gray-400">Facilite o início das atividades com apenas um toque e marque suas conquistas facilmente.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              O Que Nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Usuários Dizem
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#111111] border-blue-500/20 p-6 sm:p-8">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t border-blue-500/20">
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-950/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-blue-600/10 to-blue-900/10 border-blue-500/30 p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">Garantia de 30 Dias</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Teste sem riscos! Se, após 30 dias, você não sentir uma melhora significativa em sua produtividade, devolvemos seu dinheiro. Sem perguntas!
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Bonus */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-blue-400/50 p-8 sm:p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="relative text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-bold">
                🎁 OFERTA LIMITADA
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Bônus Exclusivo
              </h2>
              <p className="text-xl sm:text-2xl text-blue-100">
                Assinatura gratuita de <span className="font-bold text-white">3 meses</span> para os primeiros 100 usuários!
              </p>
              <p className="text-blue-100">Não perca esta oportunidade incrível!</p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent to-blue-950/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Perguntas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Frequentes
              </span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-[#111111] border-blue-500/20 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 text-lg">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Não Fique Para Trás!
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300">
              Baixe o FocusAI e comece sua jornada rumo à produtividade e foco agora mesmo!
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 text-xl rounded-xl shadow-2xl shadow-blue-600/30 transition-all hover:scale-105"
            >
              <Download className="w-6 h-6 mr-3" />
              Baixar Agora
            </Button>
            <p className="text-gray-400 text-lg pt-4">
              Transforme sua luta diária em conquistas reais. A hora de agir é agora — sua nova vida de realização e sucesso está a apenas um clique!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>© 2024 FocusAI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
