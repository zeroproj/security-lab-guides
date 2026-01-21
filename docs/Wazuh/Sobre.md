---
title: Wazuh
sidebar_position: 1
---

# Wazuh

[![GitHub - wazuh/wazuh-indexer-plugins: Home of the Wazuh Indexer plugins.](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LZ2ZawmcGJNZw7mC26gwu2TPcGxKI_U4Fg&s)](https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fgithub.com%2Fwazuh%2Fwazuh-indexer-plugins&ved=0CBYQjRxqFwoTCKCiydCYnZIDFQAAAAAdAAAAABAI&opi=89978449)
### O que é o Wazuh
<p align="justify">O Wazuh é uma plataforma open source de segurança voltada para monitoramento, detecção e resposta a incidentes em ambientes de TI.Ele atua de forma centralizada coletando, analisando e correlacionando eventos de segurança provenientes de servidores, endpoints, containers, serviços em nuvem e dispositivos de rede.
Na prática, o Wazuh funciona como o cérebro de visibilidade e detecção do ambiente, permitindo identificar comportamentos suspeitos, violações de políticas, falhas de configuração e tentativas de ataque em tempo quase real.</p>
### Para que o Wazuh é usado
<p align="justify">O Wazuh é utilizado para aumentar a postura de segurança de ambientes corporativos, oferecendo:</p>
- Monitoramento contínuo de eventos e logs
- Detecção de ameaças e atividades suspeitas
- Identificação de falhas de configuração e vulnerabilidades
- Auditoria e conformidade com normas de segurança
- Centralização de informações para resposta a incidentes
<p align="justify">Ele é amplamente adotado por empresas que precisam de visibilidade, controle e rastreabilidade, mas que não querem ou não podem investir imediatamente em soluções proprietárias de alto custo</p>
### Onde o Wazuh se encaixa
<p align="justify">O Wazuh é uma solução **multicamadas**, podendo atuar em diferentes frentes dentro da segurança da informação:</p>
**🛡️ SOC (Security Operations Center)**
- Fonte central de eventos de segurança
- Base para análise, correlação e investigação de incidentes
- Apoio direto à operação 24x7 de segurança

**🔵 Blue Team**
- Detecção de ataques, comportamentos anômalos e persistência
- Monitoramento de integridade de arquivos e sistemas
- Validação de hardening e políticas de segurança

**📊 SIEM**
- Coleta e correlação de logs
- Criação de alertas e regras personalizadas
- Dashboards e visibilidade centralizada

**🧠 XDR (parcial / conceitual)**
- Correlação de eventos entre endpoints, servidores e cloud
- Visão unificada de incidentes
- Integração com outras ferramentas de segurança
  
<font color="#c0504d">⚠️ Importante: o Wazuh **não é um XDR completo nativo**, mas pode compor uma arquitetura XDR quando integrado a outras soluções.</font>

### Casos de uso reais

**O Wazuh é aplicado em cenários práticos do dia a dia, como:**
- Detecção de ataques de força bruta em servidores Linux e Windows
- Monitoramento de alterações não autorizadas em arquivos críticos (FIM)
- Identificação de malware e comportamentos suspeitos em endpoints
- Auditoria de acessos e ações administrativas
- Detecção de falhas de configuração (hardening inadequado)
- Monitoramento de containers e workloads em nuvem
- Atendimento a requisitos de compliance (ISO 27001, PCI-DSS, LGPD, etc.)
- Base de logs e eventos para times de SOC e resposta a incidentes

### Resumo

**O Wazuh é uma solução robusta, flexível e escalável, ideal para quem deseja:**
- Construir ou evoluir um SOC
- Fortalecer operações de Blue Team
- Implementar um SIEM open source
- Ter visibilidade real do ambiente sem depender de soluções proprietárias
  
Ele se destaca por combinar custo zero de licenciamento com alto nível técnico, sendo amplamente utilizado tanto em ambientes corporativos quanto em laboratórios e projetos educacionais.