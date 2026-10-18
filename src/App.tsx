import { useMemo, useState } from 'react'
import words from './data/words.json'

type Word = { term: string; category: string; definition: string }

const data = words as Word[]
const categories = ['Все', ...Array.from(new Set(data.map((w) => w.category)))]

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-mint-deep font-display text-xl font-bold text-white">
        Аб
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-sun ring-2 ring-paper" />
      </div>
      <div className="leading-tight">
        <div className="font-display text-xl font-bold">Словарик</div>
        <div className="text-xs text-ink-soft">IT-термины для студентов</div>
      </div>
    </div>
  )
}

export default function App() {
  const [query, setQuery] = useState('')
  const [asc, setAsc] = useState(true)
  const [category, setCategory] = useState('Все')

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return data
      .filter((w) => category === 'Все' || w.category === category)
      .filter((w) => !q || w.term.toLowerCase().includes(q) || w.definition.toLowerCase().includes(q))
      .sort((a, b) => a.term.localeCompare(b.term, 'ru') * (asc ? 1 : -1))
  }, [query, asc, category])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-10 shrink-0 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-6 py-4">
          <Logo />
          <div className="ml-auto flex flex-wrap items-center gap-3 max-[1000px]:ml-0 max-[1000px]:w-full">
            <label className="relative min-w-[220px] flex-1">
              <span className="sr-only">Поиск</span>
              <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Найти слово…"
                className="h-10 w-full rounded-lg border border-line bg-white pl-9 pr-3 text-sm outline-none transition focus:border-mint-deep focus:ring-4 focus:ring-mint"
              />
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Фильтр по категории"
              className="h-10 cursor-pointer rounded-lg border border-line bg-white px-3 text-sm outline-none transition hover:border-mint-deep focus:border-mint-deep focus:ring-4 focus:ring-mint"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === 'Все' ? 'Все категории' : c}
                </option>
              ))}
            </select>

            <button
              onClick={() => setAsc((v) => !v)}
              className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg bg-mint px-4 text-sm font-medium text-mint-deep transition hover:bg-mint-deep hover:text-white focus:outline-none focus:ring-4 focus:ring-mint"
            >
              <svg className={`h-4 w-4 transition-transform ${asc ? '' : 'rotate-180'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
              {asc ? 'А → Я' : 'Я → А'}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="mb-10 max-w-2xl">
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              Словарь программиста
            </h1>
            <p className="mt-3 text-ink-soft">
              Основные термины из курса — коротко и по делу. Найдено слов:{' '}
              <span className="font-semibold text-mint-deep">{list.length}</span>
            </p>
          </div>

          {list.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-line py-20 text-center text-ink-soft">
              Ничего не найдено. Попробуйте изменить запрос или фильтр.
            </div>
          ) : (
            <ul className="grid grid-cols-3 gap-5 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
              {list.map((w) => (
                <li
                  key={w.term}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-mint-deep/40 hover:shadow-[0_8px_24px_-12px_rgba(47,125,91,0.35)]"
                >
                  <span className="mb-4 w-fit rounded-full bg-sun px-2.5 py-0.5 text-xs font-medium text-[#6b5311]">
                    {w.category}
                  </span>
                  <h2 className="font-display text-xl font-semibold">{w.term}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.definition}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <footer className="shrink-0 border-t border-line bg-mint/50">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-ink-soft">
          Сделал Страленя А.В. В качестве домашнего задания на КПиЯП
        </div>
      </footer>
    </div>
  )
}
