import styles from './style.module.scss';

const Loading = () => {
  return (
    <div className={styles.container}>
      <div>Loading</div>
      <div className={styles.gifBlock}>
        <img src='https://i.gifer.com/5Q0v.gif' alt='loading-gif'></img>
      </div>
    </div>
  );
};

export default Loading;
