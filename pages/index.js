import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <Head>
        <title>Biblia con Evidencias</title>
      </Head>
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Biblia con Evidencias</h1>
        <p className="text-lg mb-6">
          Explora textos bíblicos con evidencia histórica, científica y comentarios adventistas.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Jardín del Edén:</strong> ¿Dónde se encontraba realmente?</li>
          <li><strong>La Segunda Venida:</strong> Profecías y contexto actual</li>
          <li><strong>Mapas:</strong> Ubica lugares bíblicos en mapas modernos</li>
        </ul>
      </main>
    </div>
  )
}