import { LegalIdentity, LegalPage, legalMetadata } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata = legalMetadata(
  "/politica-de-privacidade/",
  "Política de privacidade",
  "Como a Bytek Labs coleta, usa e protege dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de privacidade"
      lead="Como a Bytek Labs trata dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
    >
      <h2>1. Controlador dos dados</h2>
      <p>O responsável pelo tratamento dos dados pessoais descritos nesta política é:</p>
      <LegalIdentity />
      <p>
        O encarregado pelo tratamento de dados (LGPD, art. 41) é o próprio responsável, {site.responsible},
        pelo e-mail <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>2. Quais dados tratamos</h2>
      <ul>
        <li>
          <strong>Dados que você nos envia:</strong> nome, empresa, telefone, e-mail e a descrição do seu
          projeto, quando você preenche o formulário de contato ou fala com a gente pelo WhatsApp ou e-mail.
        </li>
        <li>
          <strong>Dados de contratação:</strong> nome ou razão social, CPF ou CNPJ, endereço e dados
          necessários para emitir propostas, contratos, cobranças e documentos fiscais, quando você contrata
          um serviço.
        </li>
        <li>
          <strong>Dados técnicos de acesso:</strong> endereço IP, data e hora, navegador e páginas acessadas,
          registrados automaticamente pelo provedor de hospedagem por segurança e funcionamento do site.
        </li>
      </ul>
      <p>
        O formulário do site não grava dados em servidor próprio: ele apenas monta uma mensagem e abre o
        WhatsApp para que você a envie. O site não usa cookies de publicidade nem ferramentas de rastreamento
        ou análise de comportamento.
      </p>

      <h2>3. Para que usamos e com qual base legal</h2>
      <ul>
        <li>Responder contatos e elaborar propostas (procedimentos preliminares a contrato, art. 7º, V).</li>
        <li>Executar os serviços contratados, cobrar e prestar suporte (execução de contrato, art. 7º, V).</li>
        <li>Emitir notas fiscais e cumprir obrigações legais e regulatórias (art. 7º, II).</li>
        <li>Manter a segurança do site e prevenir fraudes (legítimo interesse, art. 7º, IX).</li>
      </ul>
      <p>Não vendemos nem alugamos dados pessoais.</p>

      <h2>4. Com quem compartilhamos</h2>
      <p>Os dados podem ser compartilhados apenas com prestadores necessários à operação:</p>
      <ul>
        <li><strong>Cloudflare:</strong> hospedagem e entrega do site.</li>
        <li><strong>WhatsApp (Meta) e Google (Gmail):</strong> canais de comunicação que você escolhe usar.</li>
        <li>
          <strong>Intermediadores de pagamento (como a AbacatePay):</strong> processamento de cobranças e
          pagamentos, quando você contrata um serviço.
        </li>
        <li><strong>Autoridades públicas:</strong> quando exigido por lei ou ordem judicial.</li>
      </ul>
      <p>
        Alguns desses provedores podem armazenar dados fora do Brasil, adotando salvaguardas compatíveis com
        a LGPD.
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <p>
        Mensagens de contato que não viram contratação são mantidas pelo tempo necessário para o atendimento
        e podem ser excluídas a seu pedido. Dados de contratação e documentos fiscais são guardados pelo prazo
        exigido pela legislação (em geral, 5 anos) e pelo tempo necessário ao exercício de direitos.
      </p>

      <h2>6. Seus direitos</h2>
      <p>Como titular, você pode, a qualquer momento e gratuitamente:</p>
      <ul>
        <li>confirmar se tratamos seus dados e acessá-los;</li>
        <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>pedir anonimização, bloqueio ou eliminação de dados desnecessários;</li>
        <li>pedir a portabilidade dos dados;</li>
        <li>saber com quem seus dados foram compartilhados;</li>
        <li>revogar o consentimento, quando ele for a base do tratamento;</li>
        <li>apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).</li>
      </ul>
      <p>
        Para exercer esses direitos, escreva para <a href={`mailto:${site.email}`}>{site.email}</a>. A
        resposta é enviada em até 15 dias.
      </p>

      <h2>7. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais para proteger os dados, como conexão criptografada
        (HTTPS), acesso restrito às informações e uso de provedores reconhecidos. Nenhum sistema é totalmente
        imune a incidentes; se algum ocorrer e puder causar risco relevante, os titulares e a ANPD serão
        comunicados, conforme a lei.
      </p>

      <h2>8. Alterações</h2>
      <p>
        Esta política pode ser atualizada para refletir mudanças no site, nos serviços ou na legislação. A data
        da última atualização fica indicada no topo desta página. Veja também os{" "}
        <a href="/termos-de-uso/">Termos de uso</a>.
      </p>
    </LegalPage>
  );
}
