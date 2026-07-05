const team = ["Hrudu Shibu", "Nawas Manakkadavan", "Khushi Verma"];

export function Team() {
  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {team.map((name) => (
            <div key={name} className="rounded-xl border bg-card p-6 text-center">
              <p className="font-medium">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
