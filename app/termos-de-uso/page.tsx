import { LegalIdentity, LegalPage, legalMetadata } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata = legalMetadata(
  "/termos-de-uso/",
  "Termos de uso",
  "Condições de uso do site da Bytek Labs e regras gerais para contratação de serviços de desenvolvimento de software, sites, automação e IA.",
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos de uso"
      lead="Condições para usar este site e regras gerais para a contratação dos serviços da Bytek Labs."
    >
      <h2>1. Quem somos</h2>
      <p>
        Este site é mantido pela {site.name}, consultoria de tecnologia que presta serviços de
        desenvolvimento de software sob medida, sites e aplicações web, automação de processos,
        inteligência artificial e integração de sistemas, com atendimento remoto em todo o Brasil.
      </p>
      <LegalIdentity />

      <h2>2. Aceitação</h2>
      <p>
        Ao acessar este site ou entrar em contato pelos canais informados nele, você concorda com estes
        Termos de uso e com a <a href="/politica-de-privacidade/">Política de privacidade</a>. Se não
        concordar, não utilize o site.
      </p>

      <h2>3. Uso do site</h2>
      <p>
        O site tem caráter informativo: apresenta os serviços e produtos da {site.name} e os canais de
        contato. Você se compromete a não utilizá-lo para fins ilícitos, não tentar acessar áreas ou
        sistemas sem autorização e não interferir no seu funcionamento.
      </p>
      <p>
        As prévias dos produtos exibidas no site são ilustrações com dados fictícios e indicam o estágio
        de desenvolvimento de cada produto; não representam funcionalidades já disponíveis para venda.
      </p>

      <h2>4. Contratação de serviços</h2>
      <p>
        O envio de mensagem pelo formulário, WhatsApp ou e-mail não cria obrigação de contratação para
        nenhuma das partes. Cada serviço é contratado a partir de uma proposta específica, que define
        escopo, entregas, valores, forma de pagamento, prazos estimados e condições de suporte. Em caso
        de conflito, prevalece o que estiver na proposta ou no contrato assinado.
      </p>
      <p>
        Prazos informados em propostas são estimativas e dependem do envio, pelo cliente, de informações,
        acessos, conteúdos e aprovações necessárias ao andamento do projeto.
      </p>

      <h2>5. Pagamentos</h2>
      <p>
        Os valores e as condições de pagamento constam em cada proposta. Os pagamentos podem ser
        processados por intermediadores de pagamento (por exemplo, a AbacatePay), por Pix, boleto ou
        outros meios informados no momento da cobrança. Os dados de pagamento são tratados diretamente
        pelo intermediador, conforme as políticas dele; a {site.name} não armazena dados de cartão.
      </p>

      <h2>6. Pagamentos nas plataformas da Bytek Labs</h2>
      <p>
        Em algumas soluções da {site.name}, como a plataforma de gestão para lojas, os pagamentos via Pix
        são processados por uma operadora de pagamentos parceira, autorizada a operar no Brasil.
      </p>
      <ul>
        <li>
          Cada lojista cliente recebe os valores das próprias vendas numa subconta em seu nome. A{" "}
          {site.name} não recebe nem guarda os valores das vendas dos lojistas.
        </li>
        <li>A {site.name} cobra do lojista uma taxa por transação, conforme o contrato firmado com cada cliente.</li>
        <li>Devoluções e estornos seguem as regras da operadora de pagamentos e o contrato com o lojista.</li>
        <li>Dúvidas sobre uma compra feita numa loja devem ser tratadas primeiro com a própria loja.</li>
      </ul>

      <h2>7. Cancelamento e reembolso</h2>
      <p>
        Quando o contratante for consumidor e a contratação ocorrer a distância, é garantido o direito de
        arrependimento em até 7 (sete) dias a contar da contratação, nos termos do art. 49 do Código de
        Defesa do Consumidor, com devolução dos valores pagos.
      </p>
      <p>
        Após esse período, o cancelamento segue as condições da proposta ou do contrato. Na ausência de
        regra específica, serão devidos os valores correspondentes às etapas já entregues ou em execução,
        e eventuais valores pagos por etapas não iniciadas serão devolvidos. Pedidos de cancelamento ou
        reembolso podem ser feitos pelo e-mail <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>8. Propriedade intelectual</h2>
      <p>
        Os textos, a marca, o logotipo e os elementos visuais deste site pertencem à {site.name} e não
        podem ser reproduzidos sem autorização. A titularidade e a licença de uso do código e dos materiais
        produzidos em cada projeto são definidas na respectiva proposta ou contrato.
      </p>

      <h2>9. Responsabilidades</h2>
      <p>
        A {site.name} se empenha para manter as informações do site corretas e atualizadas, mas elas podem
        mudar sem aviso prévio. O site pode conter links para serviços de terceiros (como WhatsApp e
        GitHub), que têm termos e políticas próprios e não são controlados pela {site.name}.
      </p>
      <p>
        A {site.name} não se responsabiliza por indisponibilidades temporárias do site causadas por
        manutenção, falhas de provedores ou eventos fora do seu controle.
      </p>

      <h2>10. Alterações</h2>
      <p>
        Estes Termos podem ser atualizados a qualquer momento. A data da última atualização fica indicada
        no topo desta página. Contratos em andamento continuam regidos pelas condições acordadas.
      </p>

      <h2>11. Legislação e foro</h2>
      <p>
        Estes Termos são regidos pelas leis brasileiras. Quando o contratante for consumidor, fica eleito
        o foro do seu domicílio; nos demais casos, o foro da comarca de Mirandópolis/SP.
      </p>

      <h2>12. Contato</h2>
      <p>
        Dúvidas sobre estes Termos podem ser enviadas para{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> ou pelo WhatsApp{" "}
        <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">{site.phone}</a>.
      </p>
    </LegalPage>
  );
}
