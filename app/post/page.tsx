import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from post`;
  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          <a className="link">{row.id} - {row.title}</a>
        </div>
      ))}
    </div>
  );
}