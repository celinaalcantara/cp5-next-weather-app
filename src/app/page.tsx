"use client";

import { Button } from '@/components/button/Button';
import { Header } from '@/components/header/Header';
import { Input } from '@/components/input/Input';
import { Layout } from '@/components/layout/Layout';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

export default function Home() {
  const { userName } = useContext(UserContext);
  const router = useRouter();

  const [cityName, setCityName] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const handleSearch = () => {

    router.push(`/search?city=${cityName}`);
  };

  return (
    <Layout>
      <Header title="Bem-vindo ao Weather App" userName={userName} />
      <main>
        <h2>Busque pela previsão do tempo da sua cidade</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}>
          <Input
            label="Buscar cidade"
            id="search"
            name="search"
            type="text"
            onChange={handleChange}
            placeholder="Digite o nome da cidade"
          />
          <Button type="submit">Buscar</Button>
        </form>
      </main>
    </Layout>
  );
}
