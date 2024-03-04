export default function Card({
  img,
  name,
  description,
  url,
}: {
  img: string;
  name: string;
  description: string;
  url: string;
}) {
  return (
    <a href={url} target="_blank" title="View Website">
      <div className="card-layout">
        <div className="card-mr">
          <img src={img} alt={`${img}`} className="card-img" />
          <div>
            <h2 className="card-heading">{name}</h2>
          </div>
          <br />
          <p className="card-description">{description}</p>
          <br />
          <div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            View More
          </div>
          <br />
        </div>
        <div className="glow-border"></div>
      </div>
    </a>
  );
}
