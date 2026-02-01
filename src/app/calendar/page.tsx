import { getAllCalevents } from '@/lib/calevents';

export default function CaleventPage() {
  const calevents = getAllCalevents();

  return (
    <div className="p-5">
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">Calendar</h1>
      <div className="space-y-8">
        {calevents.map((calevent) => (
          <article key={calevent._meta.path}>
            <h2 className="text-2xl font-bold">
              {calevent.year}
            </h2>
             <div dangerouslySetInnerHTML={{__html: calevent.html}} />
          </article>
        ))}
      </div>
    </div>
  );
}