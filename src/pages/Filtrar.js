import React, { useState } from 'react';
import {View, Text, StyleSheet,TextInput, Picker,TouchableOpacity,Alert} from 'react-native';






const Filtrar = ({navigation}) => {
  //pegando dados digitados
  const [numeroProposta,setNum] = useState();
  const [numeroCpf,setCpf] = useState();
  const [produto,setProduto] = useState();
  const [v_status,setStatus] = useState();
  const [nomeCliente,setNome] = useState();
  const [banco,setBanco] = useState();
  const [tipo,setTipo] = useState();

 const limparDados = () => {
  let dados = {
    cpf:numeroCpf,
    proposta:numeroProposta,
    produto: produto,
    status: v_status,
    nome: nomeCliente,
    banco_origi: banco

  }

  


  navigation.navigate('Results',{dados})
  
}

  return (
    <View style ={styles.container}>
      <Text style ={styles.text}>Buscar propostas por:</Text>
      <View style ={styles.form}>

        
        <Text>NUMERO DA PROPOSTA</Text>
        <TextInput
        style={styles.Input}
        onChangeText= {setNum}
        value={numeroProposta}
    />

        <Text>CPF DO CLIENTE</Text>
        <TextInput style = {styles.Input}
        placeholderTextColor = "#999"
        value = {numeroCpf}
        onChangeText = {setCpf}></TextInput>


        <Text>NOME CLINTE</Text>
        <TextInput style = {styles.Input}
        placeholderTextColor = "#999"
        value = {nomeCliente}
        onChangeText = {setNome}></TextInput>

      <View>
        <Picker
          selectedValue={produto}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setProduto(itemValue)}
        >  
          <Picker.Item label="PRODUTO"/>
          <Picker.Item label="CONSIGNADO" value="CONSIGNADO" />
          <Picker.Item label="SMS" value="SMS" />
          <Picker.Item label="CARTÃO OLE" value="CARTÃO OLE" />
          <Picker.Item label="SMS/UNIFICADO REORGANIZADO" value="SMS/UNIFICADO REORGANIZADO" />
          <Picker.Item label="SMS - CALL CENTER" value="SMS - CALL CENTER" />
          <Picker.Item label="CARTÃO CONSIGNADO" value="CARTÃO CONSIGNADO" />
          <Picker.Item label="CONSIGNADO - FORMALIZAÇÃO MANUAL" value="CONSIGNADO - FORMALIZAÇÃO MANUAL" />
          <Picker.Item label="COSIGNADO - FOMALIZAÇÃO DIGITAL" value="COSIGNADO - FOMALIZAÇÃO DIGITAL" />
          <Picker.Item label="RECUPERAÇÃO" value="RECUPERAÇÃO" />
          <Picker.Item label="MOBILE -CHECKLIST" value="MOBILE -CHECKLIST" />
          <Picker.Item label="MOBILE - FIM DE CADASTRO" value="MOBILE - FIM DE CADASTRO" />
          <Picker.Item label="CREDITO EM CONTA" value="CREDITO EM CONTA" />
        </Picker>
      </View>


      <Picker
        selectedValue={tipo}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
      >
        <Picker.Item label="TIPO"/>
        <Picker.Item label="PORTABILIDADE" value="PORTABILIDADE" />
        <Picker.Item label="NOVO" value="NOVO" />
        <Picker.Item label="REFINANCIAMENTO" value="REFINANCIAMENTO" />
        <Picker.Item label="REFIN DE PORTABILIDADE" value="REFIN DE PORTABILIDADE" />
        <Picker.Item label="SAQUE COMPLEMENTAR" value="SAQUE COMPLEMENTAR" />
        <Picker.Item label="PORTABILIDADE COM REFIN" value="PORTABILIDADE COM REFIN" />
        <Picker.Item label="UNIFICADO REORGANIZADO" value="UNIFICADO REORGANIZADO" />
      </Picker>


      <Picker
        selectedValue={v_status}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
      >
        <Picker.Item label="STATUS" />
        <Picker.Item label="CANCELADO" value="CANCELADO" />
        <Picker.Item label="AGUARDANDO SALDO" value="AGUARDANDO SALDO" />
        <Picker.Item label="INTEGRADO" value="INTEGRADO" />
        <Picker.Item label="EM ANALISE" value="EM ANALISE" />
        <Picker.Item label="PENDENTE" value="PENDENTE" />
        <Picker.Item label="APROVADO NO NS/ AGUARDANDO RETORNO CSG" value="APROVADO NO NS/ AGUARDANDO RETORNO CSG" />
        <Picker.Item label="APROVADO NO NS/AGUARDANDO RH DA EMPRESA" value="APROVADO NO NS/AGUARDANDO RH DA EMPRESA" />
        <Picker.Item label="REPROVADO" value="REPROVADO" />
        <Picker.Item label="AGUARDANDO RETORNO INSS" value="AGUARDANDO RETORNO INSS" />
        <Picker.Item label="CADASTRO" value="CADASTRO" />
        <Picker.Item label="PENDENCIA RESOLVIDA" value="PENDENCIA RESOLVIDA" />
        <Picker.Item label="AGUARDANDO CONFIRMACAO COM CLIENTE" value="AGUARDANDO CONFIRMACAO COM CLIENTE" />
        <Picker.Item label="CONFIRMACAO COM CLIENTE APROVADA" value="CONFIRMACAO COM CLIENTE APROVADA" />
        <Picker.Item label="RECUPERACAO DE PENDENCIA" value="RECUPERACAO DE PENDENCIA" />
        <Picker.Item label="PROP CANC - GERADA NOVA PROP - SLD A MAIOR" value="PROP CANC - GERADA NOVA PROP - SLD A MAIOR" />
        <Picker.Item label="EM DIGITACAO" value="EM DIGITACAO" />
        <Picker.Item label="REAPRESENTACAO DE TED" value="REAPRESENTACAO DE TED" />
        <Picker.Item label="TED - NOVOS DADOS BANCARIOS" value="TED - NOVOS DADOS BANCARIOS" />
        <Picker.Item label="AGUARDANDO LIBERACAO DE TAXA ESPECIAL" value="AGUARDANDO LIBERACAO DE TAXA ESPECIAL" />
        <Picker.Item label="CCB INCOMPLETA/INCORRETA" value="CCB INCOMPLETA/INCORRETA" />
        <Picker.Item label="DOCUMENTO IRREGULAR" value="DOCUMENTO IRREGULAR" />
        <Picker.Item label="ASSINAR ADE EM ANEXO" value="ASSINAR ADE EM ANEXO" />
        <Picker.Item label="EM REANALISE" value="EM REANALISE" />
        <Picker.Item label="INFORMAR CONTATO DO CLIENTE" value="INFORMAR CONTATO DO CLIENTE" />
        <Picker.Item label="CADASTRO RESOLVIDO" value="CADASTRO RESOLVIDO" />
        <Picker.Item label="SALDO A MAIOR REGULARIZADO EM OUTRA PROPOSTA" value="SALDO A MAIOR REGULARIZADO EM OUTRA PROPOSTA" />
        <Picker.Item label="AGUARDANDO GERAR ADE" value="AGUARDANDO GERAR ADE" />
        <Picker.Item label="CONTROLE EXTERNO DO PARCEIRO" value="CONTROLE EXTERNO DO PARCEIRO" />
        <Picker.Item label="CANCELADA PELO PARCEIRO" value="CANCELADA PELO PARCEIRO" />
        <Picker.Item label="AUMENTO DE SALARIO INSS  - AGUARDANDO 20-JAN" value="AUMENTO DE SALARIO INSS  - AGUARDANDO 20-JAN" />
        <Picker.Item label="CLIENTE PEDE RETORNO MAIS TARDE" value="CLIENTE PEDE RETORNO MAIS TARDE" />
        <Picker.Item label="NOVO CONTATO INFORMADO" value="NOVO CONTATO INFORMADO" />
        <Picker.Item label="CANCELADA RISCO - OPERACAO IRREGULAR" value="CANCELADA RISCO - OPERACAO IRREGULAR" />
        <Picker.Item label="SALDO A MENOR REGULARIZADO EM OUTRA PROPOSTA" value="SALDO A MENOR REGULARIZADO EM OUTRA PROPOSTA" />
        <Picker.Item label="PROP ALTERADA - ATUALIZADA SALDO A MENOR" value="PROP ALTERADA - ATUALIZADA SALDO A MENOR" />
        <Picker.Item label="PROP ALTERADA - ATUALIZADA SALDO A MAIOR" value="PROP ALTERADA - ATUALIZADA SALDO A MAIOR" />
        <Picker.Item label="RISCO - CONTRATOS PENDENTES AVERBACAO" value="RISCO - CONTRATOS PENDENTES AVERBACAO" />
        <Picker.Item label="TENTATIVA DE CONTATO COM O CLIENTE SEM SUCESSO" value="TENTATIVA DE CONTATO COM O CLIENTE SEM SUCESSO" />
        <Picker.Item label="CONFIRMACAO COM CLIENTE APROVADA /PROMOTOR" value="CONFIRMACAO COM CLIENTE APROVADA /PROMOTOR" />
        <Picker.Item label="CANCELADO - CONTATO NAO INFORMADO EM ATE 7 DIAS" value="CANCELADO - CONTATO NAO INFORMADO EM ATE 7 DIAS" />
        <Picker.Item label="VALIDACAO DE INFORMACOES" value="VALIDACAO DE INFORMACOES" />
        <Picker.Item label="SALDO NAO RECEBIDO, AGUARDANDO 2 DIAS" value="SALDO NAO RECEBIDO, AGUARDANDO 2 DIAS" />
        <Picker.Item label="IDENTIFICACAO PROPOSTA - AGUARDANDO DOCUMENTACAO" value="IDENTIFICACAO PROPOSTA - AGUARDANDO DOCUMENTACAO" />
        <Picker.Item label="SEM CONTATO COM O CLIENTE - ANEXAR GRAVACAO" value="SEM CONTATO COM O CLIENTE - ANEXAR GRAVACAO" />
        <Picker.Item label="CADASTRO - AGUARDANDO CONTRATO" value="CADASTRO - AGUARDANDO CONTRATO" />
        <Picker.Item label="CADASTRADO BANCO - AGUARDANDO DOCUMENTACAO" value="CADASTRADO BANCO - AGUARDANDO DOCUMENTACAO" />
        <Picker.Item label="REPROVADO - DADOS CADASTRAIS" value="REPROVADO - DADOS CADASTRAIS" />
        <Picker.Item label="PROPOSTA EM RASCUNHO" value="PROPOSTA EM RASCUNHO" />
        <Picker.Item label="CADASTRO - AGUARDANDO CONTRATO" value="CADASTRO - AGUARDANDO CONTRATO" />
        <Picker.Item label="CADASTRADO BANCO - AGUARDANDO DOCUMENTACAO" value="CADASTRADO BANCO - AGUARDANDO DOCUMENTACAO" />
        <Picker.Item label="REPROVADO - DADOS CADASTRAIS" value="REPROVADO - DADOS CADASTRAIS" />
        <Picker.Item label="PROPOSTA EM RASCUNHO" value="PROPOSTA EM RASCUNHO" />
        <Picker.Item label="REPROVADO BANCO" value="REPROVADO BANCO" />
        <Picker.Item label="CLIENTE ALEGA QUE NAO ASSINOU O CONTRATO" value="CLIENTE ALEGA QUE NAO ASSINOU O CONTRATO" />
        <Picker.Item label="APROVADO PORTABILIDADE NS" value="APROVADO PORTABILIDADE NS" />
        <Picker.Item label="AGUARDANDO EXTRATO DE CONSIGNACAO" value="AGUARDANDO EXTRATO DE CONSIGNACAO" />
        <Picker.Item label="SALDO INFORMADO" value="SALDO INFORMADO" />
        <Picker.Item label="EM ANALISE -  SALDO" value="EM ANALISE -  SALDO" />
        <Picker.Item label="APROVADO PORTABILIDADE NS" value="APROVADO PORTABILIDADE NS" />
        <Picker.Item label="AGUARDANDO EXTRATO DE CONSIGNACAO" value="AGUARDANDO EXTRATO DE CONSIGNACAO" />
        <Picker.Item label="SALDO INFORMADO" value="SALDO INFORMADO" />
        <Picker.Item label="EM ANALISE -  SALDO" value="EM ANALISE -  SALDO" />
        <Picker.Item label="AGUARDANDO AUTORIZACAO DE RISCO" value="AGUARDANDO AUTORIZACAO DE RISCO" />
        <Picker.Item label="CANCELADO - BANCO" value="CANCELADO - BANCO" />
        <Picker.Item label="INFORMAR TELEFONE PROCEDENTE" value="INFORMAR TELEFONE PROCEDENTE" />
        <Picker.Item label="SALDO A MAIOR COLETAR ASSINATURA" value="SALDO A MAIOR COLETAR ASSINATURA" />
        <Picker.Item label="SALDO A MENOR PARCELA MAIOR COLETAR ASSINATURA " value="SALDO A MENOR PARCELA MAIOR COLETAR ASSINATURA " />
        <Picker.Item label="AGUARDANDO ATUALIZACAO CADASTRAL" value="AGUARDANDO ATUALIZACAO CADASTRAL" />
        <Picker.Item label="AGUARDANDO ENVIO SMS" value="AGUARDANDO ENVIO SMS" />
        <Picker.Item label="AGUARDANDO RETORNO SMS EM ATE 24H" value="AGUARDANDO RETORNO SMS EM ATE 24H" />
        <Picker.Item label="AGUARDANDO LIGACAO SMS - AUDITORIA" value="AGUARDANDO LIGACAO SMS - AUDITORIA" />
        <Picker.Item label="DIGITACAO SMS" value="DIGITACAO SMS" />
        <Picker.Item label="PORTABILIDADE QUITADA – NAO AVERBADA" value="PORTABILIDADE QUITADA – NAO AVERBADA" />
        <Picker.Item label="SALDO INFORMADO - ANTECIPADO " value="SALDO INFORMADO - ANTECIPADO " />
        <Picker.Item label="ORIENTAR CLIENTE - CONFIRMACAO NAO REALIZADA" value="ORIENTAR CLIENTE - CONFIRMACAO NAO REALIZADA" />
        <Picker.Item label="CLIENTE ORIENTADO - CONFIRMAR" value="CLIENTE ORIENTADO - CONFIRMAR" />
        <Picker.Item label="SOBREPOSICAO DE UMA NOVA PROPOSTA" value="SOBREPOSICAO DE UMA NOVA PROPOSTA" />
        <Picker.Item label="AGUARDANDO ANALISE DE TAXA ESPECIAL" value="AGUARDANDO ANALISE DE TAXA ESPECIAL" />
        <Picker.Item label="SALDO PAGO - AGUARDANDO RECALCULO" value="SALDO PAGO - AGUARDANDO RECALCULO" />
        <Picker.Item label="INTENSAO DE PORT. RECUSADA / ENVIAR TERMO ORIGINAL" value="INTENSAO DE PORT. RECUSADA / ENVIAR TERMO ORIGINAL" />
        <Picker.Item label="LIBERACAO DE CONSISTENCIA 180" value="LIBERACAO DE CONSISTENCIA 180" />
        <Picker.Item label="LIBERACAO DE CONSISTENCIA 162" value="LIBERACAO DE CONSISTENCIA 162" />
        <Picker.Item label="ANALISE DE CONSISTENCIA 162" value="ANALISE DE CONSISTENCIA 162" />
        <Picker.Item label="EM ANALISE / BANCO ITAU" value="EM ANALISE / BANCO ITAU" />
        <Picker.Item label="APROVADO NS CARTAO OLE" value="APROVADO NS CARTAO OLE" />
        <Picker.Item label="AGUARDANDO ADF -  NUCLEO" value="AGUARDANDO ADF -  NUCLEO" />
        <Picker.Item label="CONFIRMACAO APROVADA - PARCEIRO EXTERNO" value="CONFIRMACAO APROVADA - PARCEIRO EXTERNO" />
        <Picker.Item label="TELEFONE NAO EXISTE" value="TELEFONE NAO EXISTE" />
        <Picker.Item label="PORTABILIDADE EM VERIFICACAO" value="PORTABILIDADE EM VERIFICACAO" />
        <Picker.Item label="PRE SOLICITACAO DE SALDO" value="PRE SOLICITACAO DE SALDO" />
        <Picker.Item label="RODAR ROBO" value="RODAR ROBO" />
        <Picker.Item label="PENDENTE ROBO NS" value="PENDENTE ROBO NS" />
        <Picker.Item label="PENDENTE - DADOS CADASTRAIS" value="PENDENTE - DADOS CADASTRAIS" />
        <Picker.Item label="PENDENTE ROBO NS PORT" value="PENDENTE ROBO NS PORT" />
        <Picker.Item label="CONVENIO BLOQUEADO" value="CONVENIO BLOQUEADO" />
        <Picker.Item label="AGUARDANDO RESPOSTA CHAMADO" value="AGUARDANDO RESPOSTA CHAMADO" />
        <Picker.Item label="PROPOSTA NAO FINALIZADA INSS" value="PROPOSTA NAO FINALIZADA INSS" />
        <Picker.Item label="PORTABILIDADE EM VERIFICACAO - SMS" value="PORTABILIDADE EM VERIFICACAO - SMS" />
        <Picker.Item label="AGUARDANDO SALDO - SMS" value="AGUARDANDO SALDO - SMS" />
        <Picker.Item label="PRE SOLICITACAO DE SALDO - SMS" value="PRE SOLICITACAO DE SALDO - SMS" />
        <Picker.Item label="SALDO INFORMADO - SMS" value="SALDO INFORMADO - SMS" />
        <Picker.Item label="SALDO A MAIOR SMS AUTORIZAR" value="SALDO A MAIOR SMS AUTORIZAR" />
        <Picker.Item label="EM ANALISE SALDO - SMS" value="EM ANALISE SALDO - SMS" />
        <Picker.Item label="PENDENTE ROBO NS PORT SMS" value="PENDENTE ROBO NS PORT SMS" />
        <Picker.Item label="APROVADO PORTABILIDADE NS SMS" value="APROVADO PORTABILIDADE NS SMS" />
        <Picker.Item label="SALDO SMS NAO RECEBIDO" value="SALDO SMS NAO RECEBIDO" />
        <Picker.Item label="MODALIDADE DIVERGENTE ENTRE CSG E CONTRATO" value="MODALIDADE DIVERGENTE ENTRE CSG E CONTRATO" />
        <Picker.Item label="AGUARDANDO RETORNO BANCO" value="AGUARDANDO RETORNO BANCO" />
        <Picker.Item label="DECURSO DE PRAZO" value="DECURSO DE PRAZO" />
        <Picker.Item label="LINK ENVIADO - CETELEM" value="LINK ENVIADO - CETELEM" />
        <Picker.Item label="FORMALIZACAO DIGITAL" value="FORMALIZACAO DIGITAL" />
        <Picker.Item label="SALDO A MAIOR SMS -  CONFIRMADO ENVIAR SMS" value="SALDO A MAIOR SMS -  CONFIRMADO ENVIAR SMS" />
        <Picker.Item label="SALDO A MAIOR SMS -  AGUARDA RESPOSTA SMS" value="SALDO A MAIOR SMS -  AGUARDA RESPOSTA SMS" />
        <Picker.Item label="SALDO A MAIOR SMS -  DIGITACAO NS" value="SALDO A MAIOR SMS -  DIGITACAO NS" />
        <Picker.Item label="SMS ENVIADO - ERRO NO RECEBIMENTO OU NA RESPOSTA" value="SMS ENVIADO - ERRO NO RECEBIMENTO OU NA RESPOSTA" />
        <Picker.Item label="CADASTRO - CONTROLE EXTERNO" value="CADASTRO - CONTROLE EXTERNO" />
        <Picker.Item label="INTEGRADO - CONTROLE EXTERNO" value="INTEGRADO - CONTROLE EXTERNO" />
        <Picker.Item label="CANCELADO - CONTROLE EXTERNO" value="CANCELADO - CONTROLE EXTERNO" />
        <Picker.Item label="AGUARDA SMS PORTABILIDADE" value="AGUARDA SMS PORTABILIDADE" />
        <Picker.Item label="SALDO INFORMADO - BRADESCO" value="SALDO INFORMADO - BRADESCO" />
        <Picker.Item label="INFORMAR TABELA DE SALDO - BRADESCO" value="INFORMAR TABELA DE SALDO - BRADESCO" />
        <Picker.Item label="TABELA INFORMADA SALDO - BRADESCO" value="TABELA INFORMADA SALDO - BRADESCO" />
        <Picker.Item label="SALDO COLETAR ASSINATURA - BRADESCO" value="SALDO COLETAR ASSINATURA - BRADESCO" />
        <Picker.Item label="PROP ATUALIZADA - BRADESCO" value="PROP ATUALIZADA - BRADESCO" />
        <Picker.Item label="EM ANALISE SALDO - BRADESCO" value="EM ANALISE SALDO - BRADESCO" />
        <Picker.Item label="TED DEVOLVIDA" value="TED DEVOLVIDA" />
        <Picker.Item label="TED REGULARIZADA" value="TED REGULARIZADA" />
        <Picker.Item label="PENDENTE ROBO REANALISE" value="PENDENTE ROBO REANALISE" />
        <Picker.Item label="CONVENIO TEMPORARIAMENTE FORA DE ATUACAO" value="CONVENIO TEMPORARIAMENTE FORA DE ATUACAO" />
        <Picker.Item label="AGUARDANDO NUMERO DE PORTABILIDADE" value="AGUARDANDO NUMERO DE PORTABILIDADE" />
        <Picker.Item label="PORTABILIDADE MESA" value="PORTABILIDADE MESA" />
        <Picker.Item label="CONVENIO DIVERGENTE DA CCB" value="CONVENIO DIVERGENTE DA CCB" />
        <Picker.Item label="AGENDAMENTO DE CONTATO REALIZADO" value="AGENDAMENTO DE CONTATO REALIZADO" />
        <Picker.Item label="AGUARDA INTEGRACAO PORTABILIDADE" value="AGUARDA INTEGRACAO PORTABILIDADE" />
        <Picker.Item label="SALDO RECEBIDO - AGUARDANDO AUTORIZACAO" value="SALDO RECEBIDO - AGUARDANDO AUTORIZACAO" />
        <Picker.Item label="PROP ATUALIZADA - AUTORIZADO" value="PROP ATUALIZADA - AUTORIZADO" />
        <Picker.Item label="PROP ATUALIZADA - NAO AUTORIZADO" value="PROP ATUALIZADA - NAO AUTORIZADO" />
        <Picker.Item label="SALDO - PENDENTE NS" value="SALDO - PENDENTE NS" />
        <Picker.Item label="SALDO - PENDENCIA REGULARIZADA" value="SALDO - PENDENCIA REGULARIZADA" />
        <Picker.Item label="SALDO - PENDENTE NS SMS" value="SALDO - PENDENTE NS SMS" />
        <Picker.Item label="SALDO - PENDENCIA REGULARIZADA SMS" value="SALDO - PENDENCIA REGULARIZADA SMS" />
        <Picker.Item label="CADASTRO - RC" value="CADASTRO - RC" />
        <Picker.Item label="SEM CONTATO COM O CLIENTE - SALDO BRADESCO" value="SEM CONTATO COM O CLIENTE - SALDO BRADESCO" />
        <Picker.Item label="ERRO DIGITACAO NS" value="ERRO DIGITACAO NS" />
        <Picker.Item label="AUDITORIA DE LIGACAO" value="AUDITORIA DE LIGACAO" />
        <Picker.Item label="ANEXAR EXTRATO DE CONSIGNACOES" value="ANEXAR EXTRATO DE CONSIGNACOES" />
        <Picker.Item label="EM REANALISE PORT SMS" value="EM REANALISE PORT SMS" />
        <Picker.Item label="PRE ANALISE - DIGITADO NS" value="PRE ANALISE - DIGITADO NS" />
        <Picker.Item label="SMS ALTERNATIVO ENVIADO - AGUARDA RESPOSTA 24HRS" value="SMS ALTERNATIVO ENVIADO - AGUARDA RESPOSTA 24HRS" />
        <Picker.Item label="SMS SEM LOG DE RESPOSTA - AGUARDA RESPOSTA VIC" value="SMS SEM LOG DE RESPOSTA - AGUARDA RESPOSTA VIC" />
        <Picker.Item label="PENDENTE ROBO DIGITACAO NS" value="PENDENTE ROBO DIGITACAO NS" />
        <Picker.Item label="PORTABILIDADE INTEGRADA AGUARDA REFIN" value="PORTABILIDADE INTEGRADA AGUARDA REFIN" />
        <Picker.Item label="AUDITORIA SMS" value="AUDITORIA SMS" />
        <Picker.Item label="AGUARDA INTEGRACAO MOBILE" value="AGUARDA INTEGRACAO MOBILE" />
        <Picker.Item label="DIGITACAO MOBILE" value="DIGITACAO MOBILE" />
        <Picker.Item label="AUDITORIA NAO REALIZADA" value="AUDITORIA NAO REALIZADA" />
        <Picker.Item label="CLIENTE ORIENTADO AUDITORIA SMS" value="CLIENTE ORIENTADO AUDITORIA SMS" />
        <Picker.Item label="AGUARDANDO APROVACAO GERENTE" value="AGUARDANDO APROVACAO GERENTE" />
        <Picker.Item label="ASSINAR TERMO EM ANEXO" value="ASSINAR TERMO EM ANEXO" />
        <Picker.Item label="PORTABILIDADE EM VERIFICACAO MOBILE" value="PORTABILIDADE EM VERIFICACAO MOBILE" />
        <Picker.Item label="PRE SOLICITACAO DE SALDO MOBILE" value="PRE SOLICITACAO DE SALDO MOBILE" />
        <Picker.Item label="AGUARDANDO SALDO MOBILE" value="AGUARDANDO SALDO MOBILE" />
        <Picker.Item label="PENDENTE ROBO NS PORT MOBILE" value="PENDENTE ROBO NS PORT MOBILE" />
        <Picker.Item label="EM REANALISE PORT MOBILE" value="EM REANALISE PORT MOBILE" />
        <Picker.Item label="SALDO INFORMADO MOBILE" value="SALDO INFORMADO MOBILE" />
        <Picker.Item label="MOBILE - CHECKLIST EM VERIFICAÇÃO NS" value="MOBILE - CHECKLIST EM VERIFICAÇÃO NS" />
        <Picker.Item label="DIGITACAO EM ANALISE NS" value="DIGITACAO EM ANALISE NS" />
        <Picker.Item label="SALDO MOBILE" value="SALDO MOBILE" />
        <Picker.Item label="EM ANALISE SALDO MOBILE" value="EM ANALISE SALDO MOBILE" />
        <Picker.Item label="SALDO INTEGRADO A CONFIRMAR" value="SALDO INTEGRADO A CONFIRMAR" />
        <Picker.Item label="DIGITAÇÃO FRUSTADA MULTIBANCOS" value="DIGITAÇÃO FRUSTADA MULTIBANCOS" />
        <Picker.Item label="PROPOSTA NAO FINALIZADA MULTIBANCOS" value="PROPOSTA NAO FINALIZADA MULTIBANCOS" />
        <Picker.Item label="RISCO MULTI BANCOS" value="RISCO MULTI BANCOS" />
        <Picker.Item label="PENDENTE ROBO CETELEM" value="PENDENTE ROBO CETELEM" />
        <Picker.Item label="AGUARDANDO AVERBACAO" value="AGUARDANDO AVERBACAO" />
        <Picker.Item label="INTEGRACAO ROBO CETELEM" value="INTEGRACAO ROBO CETELEM" />
        <Picker.Item label="PROP NAO LOCALIZADA NA NS" value="PROP NAO LOCALIZADA NA NS" />
        <Picker.Item label="PROP PENDENTE NS DEFESA REALIZADA VIA CHAMADO" value="PROP PENDENTE NS DEFESA REALIZADA VIA CHAMADO" />
        <Picker.Item label="SALDO MOBILE APROVADO NO NS/ AGUARDANDO RETORNO CSG" value="SALDO MOBILE APROVADO NO NS/ AGUARDANDO RETORNO CSG" />
      </Picker>



    


      <Picker
        selectedValue={banco}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setBanco(itemValue)}
      >
        <Picker.Item label="BANCO"  />
        <Picker.Item label="Banco Alfa S.A." value="Banco Alfa S.A." />
        <Picker.Item label="Banco BMG S.A." value="Banco BMG S.A." />
        <Picker.Item label="Banco Bonsucesso S.A." value="Banco Bonsucesso S.A." />
        <Picker.Item label="Banco BPN Brasil S.A." value="Banco BPN Brasil S.A." />
        <Picker.Item label="Banco Bradesco S.A." value="Banco Bradesco S.A." />
        <Picker.Item label="Banco Cetelem S.A." value="Banco Cetelem S.A." />
        <Picker.Item label="Banco Cooperativo do Brasil S.A. - BANCOOB" value="Banco Cooperativo do Brasil S.A. - BANCOOB" />
        <Picker.Item label="Banco Cooperativo Sicredi S.A." value="Banco Cooperativo Sicredi S.A." />
        <Picker.Item label="Banco da China Brasil S.A." value="Banco da China Brasil S.A." />
        <Picker.Item label="Banco Daycoval S.A." value="Banco Daycoval S.A." />
        <Picker.Item label="(BB) Banco do Brasil S.A." value="(BB) Banco do Brasil S.A." />
        <Picker.Item label="(Banrisul) Banco do Estado do Rio Grande do Sul S.A" value="(Banrisul) Banco do Estado do Rio Grande do Sul S.A" />
        <Picker.Item label="Banco Fibra S.A." value="Banco Fibra S.A." />
        <Picker.Item label="Banco Industrial do Brasil S.A." value="Banco Industrial do Brasil S.A." />
        <Picker.Item label="Banco Intermedium S.A." value="Banco Intermedium S.A." />
        <Picker.Item label="Banco Investcred Unibanco S.A." value="Banco Investcred Unibanco S.A." />
        <Picker.Item label="Banco Itaú BMG Consignado S.A." value="Banco Itaú BMG Consignado S.A." />
        <Picker.Item label="Banco Itaucard S.A." value="Banco Itaucard S.A." />
        <Picker.Item label="Banco Original S.A." value="Banco Original S.A." />
        <Picker.Item label="Banco PAN S.A." value="Banco PAN S.A." />
        <Picker.Item label="Banco Safra S.A." value="Banco Safra S.A." />
        <Picker.Item label="Banco Votorantim S.A." value="Banco Votorantim S.A." />
        <Picker.Item label="BRB - Banco de Brasília S.A." value="BRB - Banco de Brasília S.A." />
        <Picker.Item label="(CEF) Caixa Econômica Federal" value="(CEF) Caixa Econômica Federal" />
        <Picker.Item label="China Construction Bank (Brasil) Banco Múltiplo S.A." value="China Construction Bank (Brasil) Banco Múltiplo S.A." />
        <Picker.Item label="HSBC Bank Brasil S.A. - Banco Múltiplo" value="HSBC Bank Brasil S.A. - Banco Múltiplo" />
        <Picker.Item label="Itaú Unibanco Holding S.A." value="Itaú Unibanco Holding S.A." />
        <Picker.Item label="Itaú Unibanco S.A." value="Itaú Unibanco S.A." />
        <Picker.Item label="Paraná Banco S.A." value="Paraná Banco S.A." />
        <Picker.Item label="Banco Ibi SA Banco Multiplo" value="Banco Ibi SA Banco Multiplo" />
        <Picker.Item label="Banco Mercantil S.A." value="Banco Mercantil S.A." />
        <Picker.Item label="Banco Crediare S.A." value="Banco Crediare S.A." />
        <Picker.Item label="Banco CCB Brasil S.A" value="Banco CCB Brasil S.A" />
        <Picker.Item label="Banco Crediafam" value="Banco Crediafam" />
        <Picker.Item label="Banco Industrial do Brasil S.A" value="Banco Industrial do Brasil S.A" />
        <Picker.Item label="Banco Barigui S.A" value="Banco Barigui S.A" />
        <Picker.Item label="Facta Financeira S/A" value="Facta Financeira S/A" />
        <Picker.Item label="Banco SICOOB/COOPMIL" value="Banco SICOOB/COOPMIL" />
        <Picker.Item label="Bcv-Banco de Crédito e Varejo S.A" value="Bcv-Banco de Crédito e Varejo S.A" />
        <Picker.Item label="Banco Itaú Consignado" value="Banco Itaú Consignado" />
        <Picker.Item label="Banco do Estado do Para SA." value="Banco do Estado do Para SA." />
        <Picker.Item label="Banco Santander S.A" value="Banco Santander S.A" />
        <Picker.Item label="Banco Ibi SA Banco Multiplo" value="Banco Ibi SA Banco Multiplo" />
        <Picker.Item label="Banco Mercantil S.A." value="Banco Mercantil S.A." />
        <Picker.Item label="Banco Crediare S.A." value="Banco Crediare S.A." />
        <Picker.Item label="Banco CCB Brasil S.A" value="Banco CCB Brasil S.A" />
        <Picker.Item label="Banco Crediafam" value="Banco Crediafam" />
        <Picker.Item label="Banco Industrial do Brasil S.A" value="Banco Industrial do Brasil S.A" />
        <Picker.Item label="Banco Barigui S.A" value="Banco Barigui S.A" />
        <Picker.Item label="Facta Financeira S/A" value="Facta Financeira S/A" />
        <Picker.Item label="Banco SICOOB/COOPMIL" value="Banco SICOOB/COOPMIL" />
        <Picker.Item label="Bcv-Banco de Crédito e Varejo S.A" value="Bcv-Banco de Crédito e Varejo S.A" />
        <Picker.Item label="Banco Itaú Consignado" value="Banco Itaú Consignado" />
        <Picker.Item label="Banco do Estado do Para SA." value="Banco do Estado do Para SA." />
        <Picker.Item label="Banco Santander S.A" value="Banco Santander S.A" />
        <Picker.Item label="BV Financeira S.A - Crédito, Financiamento e Investimento" value="BV Financeira S.A - Crédito, Financiamento e Investimento" />
        <Picker.Item label="Banco Agiplan" value="Banco Agiplan" />
        <Picker.Item label="Banco Santivest" value="Banco Santivest" />
        <Picker.Item label="001 - BANCO DO BRASIL" value="001 - BANCO DO BRASIL" />
        <Picker.Item label="Banco CBSS S.A." value="Banco CBSS S.A." />
        <Picker.Item label="CECOOPES - Central das Cooperativas de Economia e Credito Mutuo" value="CECOOPES - Central das Cooperativas de Economia e Credito Mutuo" />
        <Picker.Item label="Banco Bradesco Financiamentos S.A" value="Banco Bradesco Financiamentos S.A" />
        <Picker.Item label="Banco Sul Financeira S.A" value="Banco Sul Financeira S.A" />
        <Picker.Item label="NBC Bank Brasil S.A" value="NBC Bank Brasil S.A" />
        <Picker.Item label="CCM DOS FUNCION RIOS P BLICOS DO PODER J" value="CCM DOS FUNCION RIOS P BLICOS DO PODER J" />
        <Picker.Item label="PORTOCRED S.A CRED" value="PORTOCRED S.A CRED" />
        <Picker.Item label="FINANCEIRA ALFA S.A CRED" value="FINANCEIRA ALFA S.A CRED" />
        <Picker.Item label="CECM - SICOOB CREDIJUSTRA" value="CECM - SICOOB CREDIJUSTRA" />
      </Picker>

        
        <TouchableOpacity style = {styles.button} onPress = {limparDados}>
          
        
          <Text>pequisar</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
};

  
        


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor:'#ffffff',
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal:30,
    marginTop:30
  },
  text:{
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold"
  },
  Input:{
    borderBottomWidth: 1,
    marginTop:5
  },
  button: {
    marginTop: 30,
    height: 42,
    backgroundColor:'#CEF207',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  
  }
})
export default Filtrar;