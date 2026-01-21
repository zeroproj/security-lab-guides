import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Security Lab Guides"
      description="Guias e laboratórios práticos de segurança da informação com ferramentas open source"
    >
      <main
        style={{
          padding: '4rem 2rem',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h1>Security Lab Guides</h1>

        <p style={{ fontSize: '1.1rem', marginTop: '1.5rem' }}>
          Um portal de <strong>documentação técnica e laboratórios práticos</strong> focado em
          <strong> Segurança da Informação, Blue Team e SOC</strong>, utilizando
          ferramentas <strong>open source</strong> amplamente usadas no mercado.
        </p>

        <p style={{ marginTop: '1rem' }}>
          Aqui você encontrará guias passo a passo, cenários reais e explicações
          práticas sobre ferramentas como <strong>Wazuh</strong>, <strong>OpenVAS</strong>
          e outras soluções de segurança.
        </p>

        <div style={{ marginTop: '3rem' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs"
          >
            📘 Acessar Documentação
          </Link>
        </div>

        <div style={{ marginTop: '4rem', fontSize: '0.95rem', opacity: 0.8 }}>
          <p>
            Conteúdo voltado para estudantes, analistas de segurança, profissionais
            de SOC e entusiastas de cibersegurança.
          </p>
        </div>
      </main>
    </Layout>
  );
}

