export default function ComicCard({ img, series }) {
  return (
    <li>
      <img src={img} alt={series} />
      <span>{series}</span>
    </li>
  );
}
