import { useMemo, useState } from 'react'
import words from './data/words.json'

type Word = { term: string; category: string; definition: string }

const data = words as Word[]
const categories = ['Все', ...Array.from(new Set(data.map((w) => w.category)))]

function Logo() {
  return (
    <div className='flex gap-2'>
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="46" height="46" rx="6" fill="#FEF3C7"/>
      <rect width="46" height="46" rx="6" fill="#FEF3C7"/>
      <path d="M23 30V14.8333" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" stroke="#B45309"/>
      <path d="M26.5 24.1667C25.4906 23.8716 24.604 23.2574 23.973 22.4161C23.342 21.5748 23.0006 20.5516 23 19.5C22.9994 20.5516 22.658 21.5748 22.027 22.4161C21.396 23.2574 20.5094 23.8716 19.5 24.1667" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" stroke="#B45309"/>
      <path d="M29.531 16.5833C29.7995 16.1184 29.9574 15.5979 29.9925 15.0622C30.0276 14.5265 29.9391 13.9899 29.7336 13.4939C29.5282 12.9979 29.2114 12.5558 28.8077 12.2018C28.4041 11.8478 27.9245 11.5914 27.4059 11.4524C26.8873 11.3135 26.3437 11.2957 25.8172 11.4004C25.2906 11.5052 24.7952 11.7297 24.3693 12.0565C23.9434 12.3833 23.5983 12.8038 23.3609 13.2853C23.1235 13.7668 23 14.2965 23 14.8333C23 14.2965 22.8765 13.7668 22.6391 13.2853C22.4017 12.8038 22.0566 12.3833 21.6307 12.0565C21.2048 11.7297 20.7094 11.5052 20.1828 11.4004C19.6563 11.2957 19.1127 11.3135 18.5941 11.4524C18.0755 11.5914 17.5959 11.8478 17.1922 12.2018C16.7886 12.5558 16.4718 12.9979 16.2664 13.4939C16.0609 13.9899 15.9724 14.5265 16.0075 15.0622C16.0426 15.5979 16.2005 16.1184 16.469 16.5833" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" stroke="#B45309"/>
      <path d="M29.9965 14.9792C30.6823 15.1555 31.3189 15.4856 31.8582 15.9444C32.3975 16.4032 32.8254 16.9787 33.1093 17.6273C33.3933 18.276 33.5259 18.9807 33.4972 19.6882C33.4685 20.3957 33.2791 21.0874 32.9435 21.7108" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" stroke="#B45309"/>
      <path d="M30 30C31.0273 30 32.0258 29.661 32.8408 29.0356C33.6557 28.4102 34.2416 27.5334 34.5074 26.5412C34.7733 25.5489 34.7044 24.4967 34.3113 23.5476C33.9182 22.5985 33.2229 21.8057 32.3333 21.292" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" stroke="#B45309"/>
      <path d="M32.2948 29.3968C32.3766 30.0294 32.3278 30.6721 32.1515 31.2851C31.9751 31.8981 31.675 32.4685 31.2696 32.9609C30.8642 33.4534 30.3621 33.8576 29.7944 34.1484C29.2267 34.4392 28.6054 34.6106 27.9689 34.6519C27.3323 34.6932 26.6941 34.6036 26.0935 34.3885C25.493 34.1735 24.9429 33.8377 24.4773 33.4017C24.0116 32.9658 23.6403 32.439 23.3862 31.8539C23.1321 31.2688 23.0007 30.6379 23 30C22.9993 30.6379 22.8679 31.2688 22.6138 31.8539C22.3597 32.439 21.9884 32.9658 21.5227 33.4017C21.0571 33.8377 20.507 34.1735 19.9065 34.3885C19.3059 34.6036 18.6677 34.6932 18.0311 34.6519C17.3946 34.6106 16.7733 34.4392 16.2056 34.1484C15.6379 33.8576 15.1358 33.4534 14.7304 32.9609C14.325 32.4685 14.0249 31.8981 13.8485 31.2851C13.6722 30.6721 13.6234 30.0294 13.7052 29.3968" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" stroke="#B45309"/>
      <path d="M16 30C14.9727 30 13.9742 29.661 13.1592 29.0356C12.3443 28.4102 11.7584 27.5334 11.4926 26.5412C11.2267 25.5489 11.2956 24.4967 11.6887 23.5476C12.0818 22.5985 12.7771 21.8057 13.6667 21.292" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" stroke="#B45309"/>
      <path d="M16.0035 14.9792C15.3177 15.1555 14.6811 15.4856 14.1418 15.9444C13.6025 16.4032 13.1746 16.9787 12.8907 17.6273C12.6067 18.276 12.4741 18.9807 12.5028 19.6882C12.5315 20.3957 12.7209 21.0874 13.0565 21.7108" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" stroke="#B45309"/>
      </svg>
      <div className="leading-tight">
        <div className="font-display text-xl font-bold">Knowli</div>
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
