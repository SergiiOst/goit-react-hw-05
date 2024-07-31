import s from "./NotFoundPage.module.css";
export const NotFoundPage = () => {
  return (
    <div>
      <ul className={s.notFound}>
        <li>
          <h2>Page is not found 404</h2>
        </li>
        <li>
          <img src="/src/assets/deadpool.png" alt="Sorry..." />
        </li>
      </ul>
    </div>
  );
};
