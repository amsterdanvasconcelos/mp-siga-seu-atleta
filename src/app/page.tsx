import db from '@/prisma/db';

async function Home() {
  const sports = await db.sport.findMany();

  return (
    <div>
      {sports.map(({ id, name }) => (
        <h3 key={id}>{name}</h3>
      ))}
    </div>
  );
}

export default Home;
