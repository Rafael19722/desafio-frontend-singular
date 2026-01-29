import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font font-heading font-bold text-dark mt-10">
          Teste da Página
        </h1>
        <p className="text-lg text-text-body mt-4">
          Se der pra ler sem ta atrás do menu ta funcionando
        </p>
        <div className="h-[150vh]"></div>
      </div>
    </main>
  );
}
