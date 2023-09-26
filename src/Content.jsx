import './content.css';

export const Content = ({ content }) => {
  return (
    <section className="content">
      <ul className="content__list">
        {content.map((item) => (
          <li className="content__item" key={item.id}>
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </section>
  );
};
