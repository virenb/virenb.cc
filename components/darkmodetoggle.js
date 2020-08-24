import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <input
        type='checkbox'
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
    </div>
  );
};

export default DarkModeToggle;
