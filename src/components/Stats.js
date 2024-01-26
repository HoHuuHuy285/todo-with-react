export default function Stats({ tasks }) {
  if (!tasks.length)
    return (
      <p className="stats ">
        {" "}
        <em>Hãy bắt đầu với việc thêm nhiệm vụ vào danh sách </em>
      </p>
    );

  const numTasks = tasks.length;
  const numCompleted = tasks.filter((task) => task.packed).length;
  const percent = Math.round((numCompleted / numTasks) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? ` Hoàn Hảo`
          : `👜 Bạn còn ${numTasks} việc cần làm , và bạn đã hoàn thành 
        ${numCompleted}(${percent}%)`}
      </em>
    </footer>
  );
}
